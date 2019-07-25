/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")
const { renderToString } = require("react-dom/server")
const { I18n } = require("./src/components")
const Backend = require("i18next-sync-fs-backend")

global.XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  I18n.use(Backend).init({
    initImmediate: false,
    backend: {
      loadPath: "src/locales/{{lng}}/{{ns}}.json",
    },
  })
  I18n.loadNamespaces(["common"], () => {
    replaceBodyHTMLString(renderToString(bodyComponent))
  })
}
