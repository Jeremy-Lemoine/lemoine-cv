import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import info from "./info";

const resources = Object.fromEntries(
	info.map((lang) => {
		return [lang.language, { translation: lang.translationForI18Next }];
	})
);

i18n.use(initReactI18next).init({
	resources: resources,
	lng: "fr",

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
