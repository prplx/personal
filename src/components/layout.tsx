import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import { useTranslation } from "react-i18next"
import { I18n } from "."
import { Seo } from "."
import { mediaDesktop } from "../styles"
import bg from "../images/bg@2x.jpg"

export default ({ children }: { children: React.ReactNode }) => {
  const [t] = useTranslation()

  return (
    <Fragment>
      <Seo title={t("title")} />
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href={`${process.env.SITE_URL}`} />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap&subset=cyrillic"
          rel="stylesheet"
        />
      </Helmet>
      <Global styles={globalStyles}></Global>
      <div>{children}</div>
    </Fragment>
  )
}

const globalStyles = css`
  :root {
    --min-font-size: calc(0.3em + 10.2px);
    --max-font-size: calc(0.3em + 14.4px);
  }
  html {
    font-size: var(--min-font-size);
    font-family: Montserrat;

    ${mediaDesktop`
      font-size: calc(0.3em + 1vw);
    `}

    @media screen and (min-width: 1440px) {
      font-size: var(--max-font-size);
    }
  }
  body {
    min-height: 100vh;
    margin: 0;
    background: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 45%;
    color: white;
    -webkit-font-smoothing: antialiased;

    ${mediaDesktop`
      overflow: hidden;
    `}
  }
`
