import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import * as Gatsby from 'gatsby'
import SEO from '../seo'
import {Helmet} from 'react-helmet'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'React CWB',
    },
  },
}))

const Component = () => (
  <div>
    <SEO title="Home" />
    My component
  </div>
)

describe('<SEO>', () => {
  it('render correct metatag', () => {
    render(<Component />)
    const helmet = Helmet.peek()
    expect(helmet.title).toBe('Home | React CWB')
  })
})
