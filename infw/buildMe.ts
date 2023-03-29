import fs from 'fs/promises'
import path from 'path'

import { config } from 'dotenv-defaults'
import { build as esbuildBuild, PluginBuild } from 'esbuild'
import fg from 'fast-glob'
import { build } from 'vite'

import { prebuildApiFile } from '@redwoodjs/internal/dist/build/babel/api'
import { getWebSideBabelPlugins } from '@redwoodjs/internal/dist/build/babel/web'
import { buildWeb } from '@redwoodjs/internal/dist/build/web'
import { getPaths } from '@redwoodjs/internal/dist/paths'
import { listRoutes } from '@redwoodjs/vite/dist/virtualRoutes'

const feServerBuild = async () => {
  // ---- This is for debugging purposes only ----
  // We need the dotenv, so that prisma knows the DATABASE env var
  // Normally the RW cli loads this for us.... something to think about
  config({
    path: path.join(getPaths().base, '.env'),
    defaults: path.join(getPaths().base, '.env.defaults'),
    multiline: true,
  })
  //------------------------------------------------

  const viteConfig = getPaths().web.viteConfig

  if (!viteConfig) {
    throw new Error('die')
  }

  // Step 1A: Generate the client bundle
  await buildWeb({ verbose: true })

  // Step 1B: Generate the server output
  await build({
    configFile: viteConfig,
    build: {
      // Because we configure the root to be web/src, we need to go up one level
      outDir: '../dist/server', // @TODO we could just getPaths here
      ssr: './entry-server.tsx', // @TODO we need to use getPaths() because it could be jsx or tsx
    },
    envFile: false,
    logLevel: 'info',
  })

  // Step 2: Build routeHooks to dist
  // @TODO think about whether we should just build
  // inside the Step3 reduce
  // @TODO move this into internal/paths
  const allRouteHooks = fg.sync('**/*.routeHooks.{js,ts,tsx,jsx}', {
    absolute: true,
    cwd: getPaths().web.src, // the page's folder
  })

  const runRwBabelTransformsPlugin = {
    name: 'rw-esbuild-babel-transform',
    setup(build: PluginBuild) {
      build.onLoad({ filter: /\.(js|ts|tsx|jsx)$/ }, async (args) => {
        // Remove RedwoodJS "magic" from a user's code leaving JavaScript behind.
        // @TODO: We need the new transformWithBabel function in https://github.com/redwoodjs/redwood/pull/7672/files
        const transformedCode = prebuildApiFile(
          args.path,
          args.path,
          getWebSideBabelPlugins()
        )

        if (transformedCode?.code) {
          return {
            contents: transformedCode.code,
            loader: 'js',
          }
        }

        throw new Error(`Could not transform file: ${args.path}`)
      })
    },
  }

  await esbuildBuild({
    absWorkingDir: getPaths().web.base,
    entryPoints: allRouteHooks,
    platform: 'node',
    target: 'node16',
    // Disable splitting and esm, because Redwood web modules dont support esm yet
    // outExtension: { '.js': '.mjs' },
    // format: 'esm',
    // splitting: true,
    bundle: true,
    plugins: [runRwBabelTransformsPlugin],
    packages: 'external',
    outdir: path.join(getPaths().web.dist, '/server/routeHooks'),
  })

  // Step 3: Generate route-manifest.json
  const clientBuildManifest: PageManifest = await import(
    path.join(getPaths().web.dist, 'build-manifest.json')
  )

  const routesList = listRoutes()

  const routeManifest = routesList.reduce((acc, route) => {
    acc[route.path] = {
      name: route.name,
      bundle: clientBuildManifest[route.relativeFilePath!].file,
      matchRegexString: route.matchRegexString,
      routePath: route.path, // this is the path definition, not the actual path
      routeHooks: route.routeHooks
        ? path
            .relative(getPaths().web.src, route.routeHooks)
            .replace('.ts', '.js') // @NOTE need to change to .mjs here if we use esm
        : null,
    }
    return acc
  }, {})

  await fs.writeFile(
    path.join(getPaths().web.dist, 'server/route-manifest.json'),
    JSON.stringify(routeManifest)
  )
}

// @TODO see if this type is exported from Vite
type RelativePagePath = string
type PageManifest = Record<
  RelativePagePath,
  {
    file: string
    imports: string[]
    isDynamicEntry: boolean
    dynamicImports: []
    src: RelativePagePath
  }
>

feServerBuild()
