import { photoPro } from "../../../images";
import CopyText from "../../../utils/components/CopyText";
import description from "./description";

function Informations() {
	return (
		<div className='informations-container'>
			<div className='image-container'>
				<img
					src={photoPro}
					width='242px'
					height='322px'
					style={{ borderRadius: "50%", boxShadow: "0 0 15px black" }}
					alt=''
				/>
			</div>
			<div className='text-container'>
				<p className='left retour-ligne' style={{ fontSize: "calc(var(--page-font-size) * 1.05)" }}>
					{description}
				</p>
				<br />
				<br />
				<br />
				<br />
				<p className='left'>
					Adresse mail :{" "}
					<CopyText className='orange' copiedText='Adresse mail copiée'>
						jeremy.lemoinezemmour@gmail.com
					</CopyText>
				</p>
				<br />
				<p className='left'>
					Téléphone :{" "}
					<CopyText className='orange' copiedText='Numéro de téléphone copié'>
						06 86 83 67 35
					</CopyText>
				</p>
				<br />
				<div className='left inline'>
					Adresse postale :&nbsp;
					<CopyText className='orange retour-ligne' copiedText='Adresse postale copiée'>
						{"4 Rue Du Chemin Blanc,\n28190,\nLandelles,\nFrance"}
					</CopyText>
				</div>
			</div>
		</div>
	);
}

export default Informations;
