interface CategoryBubbleProps {
  id?: string
  name: string
  onClick?: () => void
  imageUrl?: string
}

const CategoryBubble = ({ imageUrl, name, onClick }: CategoryBubbleProps) => {
  return (
    <button
      onClick={onClick}
      className="h-30 w-30 group relative flex rounded-full bg-orange-400 bg-center bg-no-repeat group-hover:shadow-xl xl:h-40 xl:w-40"
      style={imageUrl && { backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute h-full w-full backdrop-brightness-50 backdrop-saturate-50 transition-all group-hover:backdrop-saturate-100"></div>
      <h2 className="z-50 m-auto text-center text-lg text-white">{name}</h2>
    </button>
  )
}

export default CategoryBubble
