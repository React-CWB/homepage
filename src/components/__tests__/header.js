import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '../header'

test('Displays the correct title', () => {
  const title = 'React Cwb'
  const {getByText} = render(<Header pageTitle={title} />)
  expect(getByText(title)).toBeTruthy()
  expect(getByText('eventos anteriores')).toBeTruthy()
})
