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
      className="group flex h-40 w-40 rounded-full bg-orange-400 bg-center bg-no-repeat group-hover:shadow-xl xl:h-56 xl:w-56"
      style={imageUrl && { backgroundImage: `url(${imageUrl})` }}
    >
      <div className="fixed h-full w-full backdrop-brightness-50 backdrop-saturate-50 transition-all group-hover:backdrop-saturate-100"></div>
      <h2 className="z-50 m-auto text-center text-lg text-white">{name}</h2>
    </button>
  )
}

export default CategoryBubble
