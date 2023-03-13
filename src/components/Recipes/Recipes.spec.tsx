import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import { fetchRecipes } from 'api'
import { recipes } from 'mockData'

import Recipes from '.'

jest.mock('api')

const mockedFetchRecipes = fetchRecipes as jest.Mock<any>

beforeEach(() => {
  mockedFetchRecipes.mockResolvedValue(recipes)
})

it('should render list of recipes', async () => {
  render(<Recipes />, { wrapper: Router })
  const recipes = await screen.findAllByTestId('recipe')
  expect(recipes).toHaveLength(2)
  expect(fetchRecipes).toBeCalledTimes(1)
})
