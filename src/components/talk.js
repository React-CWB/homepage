/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const NO_PICTURE = "https://source.unsplash.com/460x460/?capybara"

const Talk = ({ fotoPalestrante, nomePalestrante, tituloPalestra }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 115px 1fr;
      `}
    >
      <div css={css` display: flex, justify-content: center`}>
        <img
          src={fotoPalestrante === "?" ? NO_PICTURE : fotoPalestrante}
          css={css`
            width: 115px;
            heigth: 115px;
            border-radius: 5px;
            margin-bottom: 5px;
          `}
          alt={`foto ${nomePalestrante}`}
        />
      </div>
      <div
        css={css`
          padding: 10px;
          @media (max-width: 768px) {
            padding-right: 0;
          }
        `}
      >
        <h6
          css={css`
            color: #444;
            margin-bottom: 0;
          `}
        >
          {nomePalestrante}
        </h6>
        <p
          css={css`
            color: #666;
            font-size: 18px;
            padding-top: 6px;
            line-height: 1;
            margin-bottom: ${rhythm(0.5)};
          `}
        >
          {tituloPalestra}
        </p>
      </div>
    </div>
  )
}

export default Talk
