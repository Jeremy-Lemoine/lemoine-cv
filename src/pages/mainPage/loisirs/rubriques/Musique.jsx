import { useState } from "react";

import piano from "../images/piano.jpg";
import guitare from "../images/guitare.jpg";
import useWindowDimensions from "../../../../utils/hooks/useWindowDimensions";
import ScrollbarComponent from "../../../../utils/hooks/withScrollbar";

function Element({ image, children }) {
	return (
		<div className='musique-element-div'>
			<img className='image' src={image} alt='' />
			<div className='content'>{children}</div>
		</div>
	);
}

const Musique = () => {
	const { width: winWidth, height: winHeight } = useWindowDimensions();

	const [computedHeight, computeHeight] = useState("auto");

	return (
		<ScrollbarComponent
			width={winWidth * 0.6}
			height={computedHeight}
			forRef={(node) => node && computeHeight(Math.max(winHeight - node.offsetParent.offsetTop - 20, 60))}>
			<div className='musique-elements-div'>
				<Element image={piano}>
					<span>10 ans de pratique</span>
					<span>Autodidacte</span>
				</Element>
				<Element image={guitare}>
					<span>Quelques mois de pratique</span>
				</Element>
			</div>
		</ScrollbarComponent>
	);
};

export default Musique;
