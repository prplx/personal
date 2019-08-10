import i18n from "i18next"
import XHR from "i18next-xhr-backend"
import { initReactI18next } from "react-i18next"
import translationRu from "../../public/locales/ru/common.json"
import translationEn from "../../public/locales/en/common.json"

const resources = {
  ru: {
    common: translationRu,
  },
  en: {
    common: translationEn,
  },
}

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: "en",
    // debug: true,
    ns: ["common"],
    defaultNS: "common",
    react: {
      wait: true,
      useSuspense: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  })
export default i18n
