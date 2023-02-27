import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SimplePage = () => {
  return (
    <>
      {/* <MetaTags title="Simple" description="Simple page" /> */}

      <h2>SimplePage</h2>
      <p>
        Find me in <code>./web/src/pages/SimplePage/SimplePage.tsx</code>
      </p>
      <p>
        My default route is named <code>simple</code>, link to me with `
        {/* <Link to={routes.simple()}>Simple</Link>` */}
      </p>
    </>
  )
}

export default SimplePage
