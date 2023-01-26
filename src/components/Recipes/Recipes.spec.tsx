import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Recipes from '.'

const api = require('api')

it('should render list of recipes', () => {
  jest.spyOn(api, 'fetchRecipes').mockResolvedValue({
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
      offset: 0,
      number: 10,
      totalResults: 159,
    },
  })
  const { container } = render(<Recipes />, { wrapper: Router })
  screen.debug(container)
})
