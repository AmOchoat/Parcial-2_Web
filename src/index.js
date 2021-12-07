import ReactDom from "react-dom";
import { IntlProvider } from "react-intl";
import Main from "./components/main";

import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

const messages = {
    "en": localeEnMessages,
    "es": localeEsMessages
}

const language = navigator.language.split(/[-_]/)[0];

ReactDom.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <Main />
  </IntlProvider>,
  document.getElementById("root")
);
