import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom'

import Search from '.'

it('should display empty field error message', async () => {
  render(<Search />, { wrapper: Router })
  const button = await screen.findByText('Search')
  userEvent.click(button)
  const error = await screen.findByTestId('error')
  expect(error).toHaveTextContent('This field is required')
})
