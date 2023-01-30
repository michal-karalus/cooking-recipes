import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter as Router } from 'react-router-dom'

import { fetchRecipes } from 'api'

import Recipes from '.'

jest.mock('api')

const recipes = {
  data: {
    results: [
      {
        id: 634006,
        title: 'Banana Bread',
        image: 'https://spoonacular.com/recipeImages/634006-312x231.jpg',
        imageType: 'jpg',
      },
      {
        id: 634171,
        title: 'Banana Pudding Cake',
        image: 'https://spoonacular.com/recipeImages/634171-312x231.jpg',
        imageType: 'jpg',
      },
    ],
  },
}

beforeEach(() => {
  fetchRecipes.mockResolvedValue(recipes)
})

it('should render list of recipes', async () => {
  await act(async () => {
    render(<Recipes />, { wrapper: Router })
  })
  const recipes = await screen.findAllByTestId('recipe')
  expect(recipes).toHaveLength(2)
  expect(fetchRecipes).toBeCalledTimes(1)
})
