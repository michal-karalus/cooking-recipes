import { useQuery } from 'react-query'

import { fetchRecipe } from 'api'
import { RecipeDetails } from 'types'

export const useRecipe = (id: string | undefined) => {
  return useQuery<RecipeDetails>(['recipe', id], () =>
    fetchRecipe(id).then((response) => response.data)
  )
}
