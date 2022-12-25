import i18next from "i18next";

import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import HttpApi from "i18next-http-backend";

// translations
import common_en from "./locales/en/common.json";
import common_ar from "./locales/ar/common.json";
import header_en from "./locales/en/header.json";
import header_ar from "./locales/ar/header.json";
import footer_en from "./locales/en/footer.json";
import footer_ar from "./locales/ar/footer.json";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    interpolation: { escapeValue: false },
    supportedLngs: ["en", "ar"],
    whitelist: ["en", "ar"],
    fallbackLng: ["en"],
    detection: {
      order: ["localStorage", "htmlTag"],
      caches: ["localStorage"],
      lookupQuerystring: "lng",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      checkWhitelist: true,
    },
    resources: {
      en: {
        common: common_en,
        header: header_en,
        footer: footer_en,
      },
      ar: {
        common: common_ar,
        header: header_ar,
        footer: footer_ar,
      },
    },
  });

export default i18next;
