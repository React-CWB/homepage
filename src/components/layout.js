/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import {useStaticQuery, graphql} from 'gatsby'
import {rhythm} from '../utils/typography'

import Header from './header'
import Footer from './footer'

export default function Layout({children}) {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  )

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 900px;
        @media (max-width: 768px) {
          padding: ${rhythm(0.75)};
          padding-top: ${rhythm(1)};
        }
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Header pageTitle={site.siteMetadata.title} />
      {children}
      <Footer />
    </div>
  )
}
