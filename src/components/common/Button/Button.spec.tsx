import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from '.'

it('should call onClick event', async () => {
  const onClick = jest.fn()
  render(<Button onClick={onClick}>foo</Button>)
  const btn = screen.getByText('foo')
  userEvent.click(btn)
  expect(onClick).toBeCalled()
  expect(onClick).toBeCalledTimes(1)
})
