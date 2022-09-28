import { useEffect } from 'react'

import ReactMarkdown from 'react-markdown'

import { useHeaderContext } from 'src/layouts/HeaderLayout/HeaderLayout'

interface RecipeProps {
  title: string
  blurb: string
  imageUrl?: string
  content: string
}

const Recipe = ({ title, blurb, imageUrl: bgUrl, content }: RecipeProps) => {
  const { setHeaderContent } = useHeaderContext()

  useEffect(() => {
    setHeaderContent({
      title,
      blurb,
      bgUrl,
    })
  }, [setHeaderContent, title, blurb, bgUrl])

  return (
    <div className="mb-20 text-3xl">
      <ReactMarkdown className="prose prose-stone">{content}</ReactMarkdown>
    </div>
  )
}

export default Recipe
