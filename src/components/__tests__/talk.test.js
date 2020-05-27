import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import foto from '../../favicon.png'

import Talk from '../talk'

describe('<Talk>', () => {
  it('render talk component correctly', () => {
    const {getByText, getByAltText} = render(
      <Talk
        nomePalestrante="Palestrante react"
        fotoPalestrante={foto}
        tituloPalestra="React JS"
      />,
    )
    expect(getByText('Palestrante react')).toBeTruthy()
    expect(getByText('React JS')).toBeTruthy()
    expect(getByAltText('foto Palestrante react')).toBeTruthy()
  })
})
