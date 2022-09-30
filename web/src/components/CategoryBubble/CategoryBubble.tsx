interface CategoryBubbleProps {
  id?: string
  name: string
  onClick?: (categoryId: string) => void
  imageUrl?: string
}

const CategoryBubble = ({
  imageUrl,
  name,
  onClick,
  id,
}: CategoryBubbleProps) => {
  return (
    <button
      onClick={() => onClick(id)}
      className="group relative flex h-32 w-32 rounded-full hover:shadow-xl lg:h-40 lg:w-40"
    >
      <div
        className="absolute h-full w-full rounded-full bg-orange-400 bg-center bg-no-repeat brightness-50 saturate-50 transition-all group-hover:brightness-75 group-hover:saturate-100"
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
      />
      <div className="m-auto brightness-100 saturate-100">
        <h2 className="z-50 m-auto text-center text-lg font-light text-white">
          {name}
        </h2>
      </div>
    </button>
  )
}

export default CategoryBubble
