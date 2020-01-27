/** @jsx jsx */
import {jsx, css} from '@emotion/core'
import {Link} from 'gatsby'

export default function Header({pageTitle}) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <Link to="/">
        <h2
          css={css`
            display: inline-block;
          `}
        >
          {pageTitle}
        </h2>
      </Link>
      <Link
        to="/events/"
        css={css`
          text-decoration: none;
        `}
      >
        todos os eventos
      </Link>
    </div>
  )
}
