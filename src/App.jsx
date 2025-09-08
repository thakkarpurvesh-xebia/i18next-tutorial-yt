import LanguageSelector from "./components/language-selector";
import {Trans, useTranslation} from "react-i18next";
import "./App.css";

const App = () => {
  const {t} = useTranslation();
  const {line1, line2} = t("description", {channel: "Purvesh Thakkar"});

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <span>
        <Trans
          i18nKey={line1}
          values={{
            channel: "Purvesh Thakkar",
          }}
          components={{1: <b />}}
        ></Trans>
      </span>
      <span>{line2}</span>
    </div>
  );
};

export default App;
