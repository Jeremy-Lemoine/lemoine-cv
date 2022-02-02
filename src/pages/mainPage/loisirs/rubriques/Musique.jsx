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
	return (
		<div className='musique-elements-div'>
			<Element image={piano}>
				<span>10 ans de pratique</span>
				<span>Autodidacte</span>
			</Element>
			<Element image={guitare}>
				<span>Quelques mois de pratique</span>
			</Element>
		</div>
	);
};

export default Musique;
