import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { css } from "@emotion/core"
import Medium from "react-icons/lib/fa/medium"
import Github from "react-icons/lib/fa/github"
import Telegram from "react-icons/lib/fa/paper-plane"
import Email from "react-icons/lib/fa/envelope"
import { Layout } from "../components"
import { mediaDesktop } from "../styles"
import avatar from "../images/avatar@2x.jpg"
import en from "../images/en.svg"
import ru from "../images/ru.svg"

export default () => {
  const [t, i18n] = useTranslation()
  const { language } = i18n

  return (
    <Layout>
      <Wrapper>
        <Header>
          <LocaleLink
            href=""
            onClick={e => {
              e.preventDefault()
              i18n.changeLanguage(language === "ru" ? "en" : "ru")
            }}
          >
            <LocaleImg src={language === "ru" ? en : ru}></LocaleImg>
            <span>{language === "ru" ? "In English" : "На русском"}</span>
          </LocaleLink>
        </Header>
        <Main>
          <Avatar src={avatar} alt={t("title")} />
          <Title>{t("title")}</Title>
          <SubTitle>{t("position")}</SubTitle>
          <Paragraph>{t("description.part1")}</Paragraph>
          <br />
          <Paragraph>{t("description.part2")}</Paragraph>
          <Links>
            <Link
              css={getSvgFillColor("#00ab6c")}
              href={`${process.env.GATSBY_MEDIUM_URL}`}
              target="_blank"
            >
              <Medium />
            </Link>
            <Link
              css={getSvgFillColor("#6e5494")}
              href={`${process.env.GATSBY_GITHUB_URL}`}
              target="_blank"
            >
              <Github />
            </Link>
            <Link
              css={getSvgFillColor("#0088cc")}
              href={`${process.env.GATSBY_TELEGRAM_URL}`}
              target="_blank"
            >
              <Telegram />
            </Link>
            <Link
              css={getSvgFillColor("#ea4335")}
              href={`mailto:${process.env.GATSBY_EMAIL}`}
              target="_blank"
            >
              <Email />
            </Link>
          </Links>
        </Main>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content";
  grid-template-rows: 64px auto;
  margin: 0;

  ${mediaDesktop`
    grid-template-areas:
      "header header"
      "content void";
    grid-template-rows: 130px auto;
    grid-template-columns: 1fr 1fr;
    margin: 0;
    height: 100vh;
  `}
`
const Header = styled.header`
  grid-area: header;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`

const Main = styled.main`
  grid-area: content;
  padding: 0 32px;
  text-align: center;
  padding-bottom: 64px;

  ${mediaDesktop`
    padding-left: 14vw;
    padding-right: 0;
    text-align: unset;
  `}
`

const Title = styled.h1`
  margin: 0;
  margin-top: 32px;
  font-size: 2em;
  font-weight: normal;

  ${mediaDesktop`
    margin-top: 2vw;
  `}
`
const SubTitle = styled.h3`
  margin: 0;
  margin-top: 16px;
  margin-bottom: 32px;
  font-weight: bold;
  line-height: 1.6em;

  ${mediaDesktop`
    margin-top: 0.83vw;
    margin-bottom: 3.33vw;
  `}
`
const Paragraph = styled.p`
  color: #c9d3da;
  /* color: white; */
  line-height: calc(var(--max-font-size) * 1.5);
  margin: 0;
`

const Avatar = styled.img`
  width: 14vw;
  height: 14vw;
  max-width: 200px;
  max-height: 200px;
  min-width: 140px;
  min-height: 140px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 20px 40px 100px rgba(0, 0, 0, 0.25);
`
const Links = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;

  ${mediaDesktop`
    justify-content: flex-start;
    margin-top: 3.2vw;
  `}
`

const Link = styled.a`
  margin-right: 2em;

  &:last-of-type {
    margin-right: 0;
  }

  ${mediaDesktop`
    margin-right: 1em;
  `}

  & svg {
    width: 30px;
    height: 30px;
    fill: white;
    transition: fill 0.5s;

    ${mediaDesktop`
      width: 1.4em;
      height: 1.4em;
    `}

    &:hover {
    }
  }
`
const LocaleLink = styled.a`
  margin-top: 24px;
  margin-right: 32px;
  font-size: 13px;
  text-decoration: none;
  color: white;

  ${mediaDesktop`
    margin-top: 36px;
    margin-right: 40px;
  `}
`

const LocaleImg = styled.img`
  width: 18px;
  margin-right: 8px;
`

const getSvgFillColor = (fill: string) => css`
  &:hover {
    & svg {
      fill: ${fill};
    }
  }
`
