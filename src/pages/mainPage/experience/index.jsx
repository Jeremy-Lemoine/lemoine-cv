import LeftToRightComponents from "../../../utils/components/LeftToRightComponents";
import banijayLogo from "./banijayLogo.png";
import lagardereLogo from "./lagardereLogo.png";

const StageTemplate = ({ nomEntreprise, dates, duree, logo, listeDeFaits }) => {
	return (
		<div className='stage-card bigger-hover'>
			<span className='nom-entreprise'>{nomEntreprise}</span>
			<span className='dates'>{dates}</span>
			<br />
			<div className='logo'>
				<img src={logo} alt='' width='150px' height='auto' />
			</div>
			<ul>
				{listeDeFaits.map((texte) => {
					return (
						<li key={texte} className='arrow'>
							{texte}
						</li>
					);
				})}
			</ul>
			<div className='duree'>{duree}</div>
		</div>
	);
};

const StageBanijay = () => {
	return (
		<StageTemplate
			nomEntreprise='Banijay France'
			dates='Juin 2021 - Juillet 2021'
			listeDeFaits={[
				"Découverte des infrastructures réseau",
				"Support informatique et création de scripts (batch, shell, bash)",
				"Préparation de postes de travail pour les nouveaux arrivants",
			]}
			duree='1 mois'
			logo={banijayLogo}
		/>
	);
};

const StageLagardere = () => {
	return (
		<StageTemplate
			nomEntreprise='Lagardère Sport'
			dates='2014'
			listeDeFaits={[
				"Découverte des différents métiers présents sur site",
				"Tâches variées de maintenance (classement, modèles simples sur Excel...)",
				"Découverte et utilisation de certains outils (Excel, logiciel de Design et Graphisme...)",
			]}
			duree='1 semaine'
			logo={lagardereLogo}
		/>
	);
};

function Experience() {
	return (
		<LeftToRightComponents height='50vh' flex={1} durationInMs={350}>
			<StageBanijay />
			<StageLagardere />
		</LeftToRightComponents>
	);
}

export default Experience;
