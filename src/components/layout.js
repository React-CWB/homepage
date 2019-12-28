/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
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
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Link to={`/`}>
          <h2
            css={css`
              display: inline-block;
            `}
          >
            {data.site.siteMetadata.title}
          </h2>
        </Link>
        <Link
          to={`/eventos/`}
          css={css`
            text-decoration: none;
          `}
        >
          eventos anteriores
        </Link>
      </div>
      {children}
    </div>
  )
}
