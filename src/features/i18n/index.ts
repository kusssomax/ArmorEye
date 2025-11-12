import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import engLang from "./locales/en.json";
import uaLang from "./locales/ua.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: engLang,
    },
    ua: {
        translation: uaLang,
    }
};

// Get saved language from localStorage or default to "en"
const getSavedLanguage = (): string => {
    const saved = localStorage.getItem("i18nextLng");
    return saved && (saved === "en" || saved === "ua") ? saved : "en";
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: getSavedLanguage(), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        fallbackLng: "en",
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

// Save language to localStorage when it changes
i18n.on("languageChanged", (lng) => {
    localStorage.setItem("i18nextLng", lng);
});

export default i18n;