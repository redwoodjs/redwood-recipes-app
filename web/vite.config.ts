import dns from 'dns'

import { defineConfig, UserConfig } from 'vite'
// import Inspect from 'vite-plugin-inspect'
// See: https://vitejs.dev/config/server-options.html#server-host
// So that Vite will load on local instead of 127.0.0.1
dns.setDefaultResultOrder('verbatim')

import redwood from '@redwoodjs/vite'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
const viteConfig: UserConfig = {
  plugins: [
    redwood(),
    // Inspect({
    //   build: true,
    //   dev: true,
    //   outputDir: '../../inspector',
    // }),
  ],
  optimizeDeps: {
    force: true,
  },
}

export default defineConfig(viteConfig)
