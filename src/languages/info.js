import en from "./en.json";
import fr from "./fr.json";

const info = [
	{
		language: "fr",
		label: "Français",
		path: "./languages/fr.json",
		translationForI18Next: fr,
	},
	{
		language: "en",
		label: "English",
		path: "./languages/en.json",
		translationForI18Next: en,
	},
	// ALWAYS ADD HERE
];

export default info;