/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import {useStaticQuery, graphql} from 'gatsby'
import {rhythm} from '../utils/typography'

import Header from './header'

export default function Layout({children}) {
  const data = useStaticQuery(
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
      <Header pageTitle={data.site.siteMetadata.title} />
      {children}
    </div>
  )
}
