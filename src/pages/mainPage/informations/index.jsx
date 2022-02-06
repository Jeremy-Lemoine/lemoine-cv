import { useTranslation } from "react-i18next";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

import { photoPro } from "../../../images";
import CopyText from "../../../utils/components/CopyText";
import { espace, espaceNoSelector } from "../../../utils/others/shortcuts";

function Informations() {
	const { t } = useTranslation();

	const { adresse_mail, telephone, adresse_postale, description, copied_mail, copied_telephone, copied_adresse } = t(
		"informations_page",
		{ returnObjects: true }
	);

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
				<p className='left retour-ligne description'>{description}</p>
				<br />
				<br />
				<br />
				<br />
				<p className='left inline' style={{ alignItems: "center" }}>
					{adresse_mail}
					{t("espace_avant_ponctuation")}:{espace}
					<CopyText className='orange' copiedText={copied_mail}>
						jeremy.lemoinezemmour@gmail.com
					</CopyText>
					{espaceNoSelector}
					{espaceNoSelector}
					<AiOutlineMail
						size={20}
						style={{ cursor: "pointer" }}
						onClick={() => (window.location = "mailto:jeremy.lemoinezemmour@gmail.com")}
					/>
				</p>
				<br />
				<p className='left inline'>
					{telephone}
					{t("espace_avant_ponctuation")}:{espace}
					<CopyText className='orange' copiedText={copied_telephone}>
						06 86 83 67 35
					</CopyText>
				</p>
				<br />
				<div className='left inline'>
					{adresse_postale}
					{t("espace_avant_ponctuation")}:{espace}
					<CopyText className='orange retour-ligne' copiedText={copied_adresse}>
						{"4 Rue Du Chemin Blanc,\n28190,\nLandelles,\nFrance"}
					</CopyText>
				</div>
				<br />
				<br />
				<br />
				<div className='left'>
					<a href='https://www.linkedin.com/in/jérémy-lemoine-zemmour/' className='icon-link'>
						<div // To get the "in" as white and not transparent
							className='background-white'
							style={{
								position: "absolute",
								left: "calc(var(--page-font-size) * var(--multiplicateur-icon-font-size) / 7.5)",
								top: "calc(var(--page-font-size) * var(--multiplicateur-icon-font-size) / 7.5)",
								width: "calc(var(--page-font-size) * var(--multiplicateur-icon-font-size) * 3.2 / 5)",
								height: "calc(var(--page-font-size) * var(--multiplicateur-icon-font-size) * 3.2 / 5)",
								backgroundColor: "white",
								zIndex: -1,
							}}
						/>
						<AiFillLinkedin
							size='calc(var(--page-font-size) * var(--multiplicateur-icon-font-size))'
							color='#0274b3'
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Informations;
