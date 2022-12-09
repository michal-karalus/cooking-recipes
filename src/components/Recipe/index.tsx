import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { fetchRecipe } from 'api'

function Recipe() {
  const { id } = useParams()

  useEffect(() => {
    fetchRecipe(id!).then((response) => {
      console.log(response.data)
    })
  })

  return <div>{id}</div>
}

export default Recipe
