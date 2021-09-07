// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Counter from '../../components/counter'

// Refer to src/setupTests.js for the import which allows us to use toHaveTextContent

test('counter increments and decrements when the buttons are clicked', () => {
  const {container} = render(<Counter />)
  const [decrement, increment] = container.querySelectorAll('button')

  const message = container.firstChild.querySelector('div')

  expect(message).toHaveTextContent('Current count: 0')

  fireEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')

  fireEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})
