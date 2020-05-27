import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import * as Gatsby from 'gatsby'
import Layout from '../layout'

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery')
useStaticQuery.mockImplementation(() => ({
  site: {
    siteMetadata: {
      title: 'React CWB',
    },
  },
}))

const Component = () => <div>My component</div>

describe('<Layout>', () => {
  it('render children with correct title', () => {
    const {getByText} = render(
      <Layout>
        <Component />
      </Layout>,
    )
    expect(getByText('My component')).toBeTruthy()
    expect(getByText('React CWB')).toBeTruthy()
  })
})
