import React from 'react'
import { render } from 'react-dom'

import App from './App'
import { reportWebVitals } from './reportWebVitals'

jest.mock('./reportWebVitals', () => ({
  reportWebVitals: jest.fn(),
}))

jest.mock('react-dom', () => ({
  render: jest.fn(),
}))

test('renders learn react link', () => {
  require('./index')
  expect(render).toHaveBeenCalledWith(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
  expect(reportWebVitals).toHaveBeenCalled()
})
