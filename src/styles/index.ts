import { css } from "@emotion/core"

export const mediaDesktop = (...args: any) => css`
  @media screen and (min-width: 1024px) {
    ${css(...args)}
  }
`
