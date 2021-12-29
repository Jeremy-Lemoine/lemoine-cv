import { SiMicrosoftoffice } from "react-icons/si";
import { FaStopwatch20 } from "react-icons/fa";

function Technique({ Icon, children }) {
	return (
		<div className='technique-div'>
			<Icon className='image' size='30px' />
			<div className='content'>{children}</div>
		</div>
	);
}

export default function Techniques() {
	return (
		<div className='techniques-div'>
			<Technique Icon={SiMicrosoftoffice}>
				<span>Bonne maîtrise d'Excel</span>
			</Technique>
			<Technique Icon={FaStopwatch20}>
				<span>Adaptation rapide aux nouveaux environnements informatiques</span>
			</Technique>
		</div>
	);
}
