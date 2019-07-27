import i18n from "i18next"
import XHR from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import translationRu from "../locales/ru/common.json"
import translationEn from "../locales/en/common.json"

const resources = {
  ru: {
    translation: translationRu,
  },
  en: {
    translation: translationEn,
  },
}

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
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
