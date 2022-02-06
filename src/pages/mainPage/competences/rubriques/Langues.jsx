import { useTranslation } from "react-i18next";

function Langue({ languageName, languageSkill }) {
	return (
		<div className='langue-div'>
			<span className='name'>{languageName}</span>
			<div className='vide' />
			<span className='skill'>{languageSkill}</span>
		</div>
	);
}

export default function Langues() {
	const { t } = useTranslation();

	const { langues } = t("competences_page", { returnObjects: true });

	return (
		<div className='langues-div'>
			<Langue languageName={langues.fr.nom} languageSkill={langues.fr.niveau} />
			<Langue languageName={langues.en.nom} languageSkill={langues.en.niveau} />
			<Langue languageName={langues.es.nom} languageSkill={langues.es.niveau} />
			<Langue languageName={langues.jap.nom} languageSkill={langues.jap.niveau} />
		</div>
	);
}
