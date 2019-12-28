/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

import Talk from "../components/talk"

const EventCard = ({ event }) => {
  const { palestras } = event.frontmatter
  const date = new Date(Number(event.frontmatter.date))
  return (
    <div
      css={css`
        margin-bottom: 20px;
      `}
    >
      <div
        css={css`
          padding: 10px;
          border: 2px solid #888;
          border-radius: 5px;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            @media (max-width: 768px) {
              flex-direction: column;
            }
          `}
        >
          <Link to={event.fields.slug}>
            <h2
              css={css`
                color: #444;
                font-size: ${rhythm(0.8)};
                margin-bottom: ${rhythm(0.75)};
                @media (max-width: 768px) {
                  font-size: ${rhythm(0.65)};
                  margin-bottom: ${rhythm(0.25)};
                }
              `}
            >
              {event.frontmatter.title}
            </h2>
          </Link>
          <h5
            css={css`
              color: #666;
              @media (max-width: 768px) {
                font-size: 16px;
              }
            `}
          >
            {date.toLocaleDateString("pt-br")}
          </h5>
        </div>
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            @media (max-width: 768px) {
              grid-template-columns: 1fr;
            }
          `}
        >
          {palestras &&
            event.frontmatter.palestras.map(
              ({ titulo, palestrante, fotoPalestrante }) => (
                <Talk
                  key={titulo}
                  nomePalestrante={palestrante}
                  fotoPalestrante={fotoPalestrante}
                  tituloPalestra={titulo}
                />
              )
            )}
        </div>
        <h6
          css={css`
            color: #444;
            margin-top: ${rhythm(0.3)};
            margin-bottom: ${rhythm(0.1)};
          `}
        >
          Programação
        </h6>
        <p
          css={css`
            color: #666;
          `}
        >
          {event.excerpt}
        </p>
      </div>
    </div>
  )
}

export default EventCard
