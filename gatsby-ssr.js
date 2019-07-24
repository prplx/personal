/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")
const { renderToString } = require("react-dom/server")
const i18n = require("i18next").default
const Backend = require("i18next-sync-fs-backend")

global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n.use(Backend).init({
    initImmediate: false,
    backend: {
      // when this site renders serverside we want to get the locales from the src folder
      loadPath: "src/locales/{{lng}}/{{ns}}.json",
    },
  })
  i18n.loadNamespaces(["common"], () => {
    replaceBodyHTMLString(bodyComponent)
  })
}

// exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
//   I18n.use(Backend).init({
//     initImmediate: false,
//     backend: {
//       // when this site renders serverside we want to get the locales from the src folder
//       loadPath: "src/locales/{{lng}}/{{ns}}.json",
//     },
//   })
//   I18n.loadNamespaces(["common"], () => {
//     replaceBodyHTMLString(bodyComponent)
//   })
// }
