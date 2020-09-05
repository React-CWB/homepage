/** @jsx jsx */
import {jsx, css} from '@emotion/core'

export default function Footer() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        padding-top: 50px;
        text-align: center;
      `}
    >
      <p>
        {'Você pode contribuir com o desenvolvimento do site acessando o '}
        <a href="https://github.com/React-CWB/homepage" target="_blank">
          nosso repositório no GitHub
        </a>
        {'.'}
      </p>
    </div>
  )
}
