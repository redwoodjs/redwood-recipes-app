import ReactMarkdown from 'react-markdown'

const Recipe = () => {
  return (
    <div className="text-3xl">
      <h2>{'Recipe'}</h2>

      <ReactMarkdown className="text-xl"># Hello, **world**!</ReactMarkdown>
    </div>
  )
}

export default Recipe
