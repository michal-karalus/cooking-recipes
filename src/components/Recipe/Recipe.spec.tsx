import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { useRecipe } from 'hooks'
import { recipe } from 'mockData'

import Recipe from '.'

jest.mock('hooks')

const mockedUseRecipe = useRecipe as jest.Mock<any>
const queryClient = new QueryClient()

beforeEach(() => {
  mockedUseRecipe.mockReturnValue({ data: recipe })
})

it('should render recipe details', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <Recipe />
      </Router>
    </QueryClientProvider>
  )
  expect(useRecipe).toHaveBeenCalledTimes(1)
  const title = screen.getByRole('heading', { level: 2 })
  expect(title).toHaveTextContent('Banana Walnut Cake')
})
