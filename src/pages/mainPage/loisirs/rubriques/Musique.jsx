import { useTranslation } from "react-i18next";
import { piano, guitare } from "../../../../images";

function Element({ image, children }) {
	return (
		<div className='musique-element-div'>
			<img className='image' src={image} alt='' />
			<div className='content'>{children}</div>
		</div>
	);
}

const Musique = () => {
	const { t } = useTranslation();

	const { musique } = t("loisirs_page", { returnObjects: true });

	return (
		<div className='musique-elements-div'>
			<Element image={piano}>
				{musique.piano.map((text, index) => (
					<span key={index}>{text}</span>
				))}
			</Element>
			<Element image={guitare}>
				{musique.guitare.map((text, index) => (
					<span key={index}>{text}</span>
				))}
			</Element>
		</div>
	);
};

export default Musique;
