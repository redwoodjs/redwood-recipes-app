const HeroHeader = () => {
  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="Preparing a meal, with a knife and a cutting board in the foreground"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-orange-800 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Simple Recipes</span>
              <span className="block text-orange-200">
                for the everyday cook
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-orange-200 sm:max-w-3xl">
              Keep it easy with these simple but delicious recipes. From
              make-ahead lunches and midweek meals to fuss-free sides and
              moreish cakes, we&apos;ve got everything you need.
            </p>
            {/* <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-orange-700 shadow-sm hover:bg-orange-50 sm:px-8"
              >
                Get started
              </a>
              <a
                href="#"
                className="flex items-center justify-center rounded-md border border-transparent bg-orange-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
              >
                Live demo
              </a>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHeader
