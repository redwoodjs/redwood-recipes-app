import { useState } from 'react'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const ADD_TO_MY_RECIPES_MUTATION = gql`
  mutation AddToMyRecipes($id: String!) {
    addToMyRecipes(id: $id) {
      name
    }
  }
`

const SaveToMyRecipesButton = ({ id }) => {
  const [alreadySaved, setAlreadySaved] = useState(false)

  const [saveToMyRecipes] = useMutation(ADD_TO_MY_RECIPES_MUTATION, {
    onCompleted: () => {
      toast.success('Saved to my recipes!')
      setAlreadySaved(true)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const btnClass = alreadySaved ? 'fill-red-600' : 'stroke-red-600'

  return (
    <button
      onClick={() =>
        saveToMyRecipes({
          variables: {
            id,
          },
        })
      }
      className="group inline-flex items-center gap-x-1 rounded-md px-4 py-2 font-fancy text-sm font-semibold leading-6 text-red-600 shadow transition duration-150 ease-in-out hover:bg-red-200"
    >
      <svg
        className={`h-6 w-6 ${btnClass} transition-transform group-hover:scale-110`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
      {alreadySaved ? 'Saved' : 'Save to my Recipe'}
    </button>
  )
}

export default SaveToMyRecipesButton
