/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { Link } from "gatsby"

export default ({ pageTitle }) => (
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
        {pageTitle}
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
)
