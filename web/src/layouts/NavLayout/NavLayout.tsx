import logoSrc from './wok.png'

type NavLayoutProps = {
  children?: React.ReactNode
}

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Your Recipes', href: '#' },
]

const NavLayout = ({ children }: NavLayoutProps) => {
  return (
    <>
      <header className="mx-12 border-b-2">
        <nav
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="flex w-full items-center justify-between border-b border-stone-500 py-4 lg:border-none">
            <div className="flex items-center">
              <img src={logoSrc} className="white h-12 w-auto" alt="logo" />

              <div className="ml-10 hidden space-x-8 md:block">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="font-fancy text-base font-medium text-slate-800 hover:text-orange-700"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 hidden space-x-4 md:block">
              <button className="inline-block rounded-md border border-transparent bg-orange-600 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">
                Sign in
              </button>
              <button className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-orange-600 hover:bg-indigo-50">
                Sign up
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-stone-500 hover:text-indigo-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
      <main className="mt-8 flex flex-col items-center justify-center">
        {children}
      </main>
    </>
  )
}

export default NavLayout