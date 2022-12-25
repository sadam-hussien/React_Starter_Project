import { useEffect } from "react";

import { useTranslation } from "react-i18next";

import Navigator from "routes";

function App() {
  const { i18n } = useTranslation();
  const { language } = i18n;

  useEffect(() => {
    const htmlEl = document.documentElement;
    htmlEl.lang = language;
    if (language === "ar") {
      htmlEl.dir = "rtl";
    } else {
      htmlEl.dir = "ltr";
    }
  }, [language]);
  return <Navigator />;
}

export default App;
