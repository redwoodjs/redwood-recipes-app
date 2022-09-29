import { useEffect } from 'react'

import ReactMarkdown from 'react-markdown'

import { useHeaderContext } from 'src/layouts/HeaderLayout/HeaderLayout'

export interface RecipeProps {
  recipe: {
    name: string
    blurb?: string
    imageUrl?: string
    content: string
  }
}

const Recipe = ({ recipe }: RecipeProps) => {
  const { setHeaderContent } = useHeaderContext()

  const { name, blurb, imageUrl: bgUrl, content } = recipe

  useEffect(() => {
    setHeaderContent({
      title: name,
      blurb,
      bgUrl,
    })
  }, [setHeaderContent, name, blurb, bgUrl])

  return (
    <div className="mb-20 text-3xl">
      <ReactMarkdown className="prose prose-stone">{content}</ReactMarkdown>
    </div>
  )
}

export default Recipe
