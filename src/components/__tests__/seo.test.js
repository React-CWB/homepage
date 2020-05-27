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
      description: `Comunidade React em Curitiba`,
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
  it('render correct title metatag', () => {
    render(<Component />)
    const helmet = Helmet.peek()
    expect(helmet.title).toBe('Home | React CWB')
  })

  it('render correct description metatag', () => {
    render(<Component />)
    const helmet = Helmet.peek()
    expect(helmet.metaTags[0].content).toBe('Comunidade React em Curitiba')
  })
})
