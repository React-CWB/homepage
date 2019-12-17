/** @jsx jsx */
import { jsx } from "@emotion/core"
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
      css={{
        margin: "0 auto",
        maxWidth: "800px",
        padding: rhythm(2),
        paddingTop: rhythm(1.5),
      }}
    >
      <Link to={`/`}>
        <h3
          css={{
            display: "inline-block",
            fontStyle: "normal",
          }}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/eventos/`}
        css={{
          float: "right",
        }}
      >
        Eventos
      </Link>
      {children}
    </div>
  )
}
