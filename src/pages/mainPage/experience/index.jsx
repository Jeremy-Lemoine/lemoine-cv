import { useTranslation } from "react-i18next";

import { banijayLogo, lagardereLogo, oxylLogo } from "../../../images";
import LeftToRightComponents from "../../../utils/components/LeftToRightComponents";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";

const StageTemplate = ({ nomEntreprise, dates, duree, logo, listeDeFaits }) => {
	const {width: winWidth} = useWindowDimensions();

	return (
		<div className='stage-card bigger-hover' style={{width: winWidth*0.6}}>
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
	const { t } = useTranslation();

	const { banijay } = t("experience_page", { returnObjects: true });

	return (
		<StageTemplate
			nomEntreprise='Banijay France'
			dates={banijay.dates}
			listeDeFaits={banijay.liste_de_faits}
			duree={banijay.duree}
			logo={banijayLogo}
		/>
	);
};

const StageLagardere = () => {
	const { t } = useTranslation();

	const { lagardere } = t("experience_page", { returnObjects: true });

	return (
		<StageTemplate
			nomEntreprise='Lagardère Sport'
			dates='2014'
			listeDeFaits={lagardere.liste_de_faits}
			duree={lagardere.duree}
			logo={lagardereLogo}
		/>
	);
};

const StageOxyl = () => {
	const { t } = useTranslation();

	const { oxyl } = t("experience_page", { returnObjects: true });

	return (
		<StageTemplate
			nomEntreprise='Oxyl'
			dates={oxyl.dates}
			listeDeFaits={oxyl.liste_de_faits}
			duree={oxyl.duree}
			logo={oxylLogo}
		/>
	);
};

function Experience() {
	return (
		<LeftToRightComponents height='50vh' flex={1} durationInMs={350}>
			<StageOxyl />
			<StageBanijay />
			<StageLagardere />
		</LeftToRightComponents>
	);
}

export default Experience;
