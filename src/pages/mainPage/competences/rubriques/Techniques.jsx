import { SiMicrosoftoffice } from "react-icons/si";
import { FaStopwatch20 } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Technique({ Icon, children }) {
	return (
		<div className='technique-div'>
			<Icon className='image' size='30px' />
			<div className='content'>{children}</div>
		</div>
	);
}

export default function Techniques() {
	const { t } = useTranslation();

	const { techniques } = t("competences_page", { returnObjects: true });

	return (
		<div className='techniques-div'>
			<Technique Icon={SiMicrosoftoffice}>
				<span>{techniques.excel}</span>
			</Technique>
			<Technique Icon={FaStopwatch20}>
				<span>{techniques.informatique}</span>
			</Technique>
		</div>
	);
}
