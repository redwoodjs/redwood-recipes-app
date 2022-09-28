interface FlatHeaderProps {
  title?: string
  blurb?: string
  bgUrl?: string
}

const FlatHeader = ({ title, blurb, bgUrl }: FlatHeaderProps) => {
  return (
    <div className="relative w-full bg-slate-800">
      <div className="absolute inset-0">
        {bgUrl && (
          <img className="h-full w-full object-cover" src={bgUrl} alt="" />
        )}
        <div
          className="absolute inset-0 bg-teal-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        {title ? (
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        ) : (
          <div className="my-2 h-10 w-48 animate-pulse rounded-md bg-gray-600" />
        )}

        {blurb ? (
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">{blurb}</p>
        ) : (
          <div className="space-y-2">
            <div className="h-5 w-3/5 animate-pulse rounded-md bg-gray-600" />
            <div className="h-5 w-2/5 animate-pulse rounded-md bg-gray-600" />
          </div>
        )}
      </div>
    </div>
  )
}

export default FlatHeader
