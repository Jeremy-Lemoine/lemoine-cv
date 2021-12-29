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
	return (
		<div className='langues-div'>
			<Langue languageName='Français' languageSkill='Langue maternelle' />
			<Langue languageName='Anglais' languageSkill='Niveau B2' />
			<Langue languageName='Espagnol' languageSkill='Niveau A2' />
			<Langue languageName='Japonais' languageSkill="Début d'apprentissage" />
		</div>
	);
}
