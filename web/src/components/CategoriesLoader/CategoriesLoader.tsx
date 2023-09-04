interface CategoriesLoaderProps {
  count: number
}

const CategoriesLoader: React.FC<CategoriesLoaderProps> = ({ count }) => {
  const categories = Array.from({ length: count }, (_, i) => i)

  return (
    <div className="flex space-x-5">
      {categories.map((category) => (
        <div
          key={category}
          className="group relative flex h-32 w-32 rounded-full lg:h-40 lg:w-40"
        >
          <div className="absolute h-full w-full animate-pulse rounded-full bg-gradient-to-r from-slate-100 to-slate-400" />
        </div>
      ))}
    </div>
  )
}
export default CategoriesLoader
