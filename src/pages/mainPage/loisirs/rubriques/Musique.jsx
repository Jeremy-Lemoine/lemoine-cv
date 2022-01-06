import { forwardRef, useState } from "react";

import piano from "../images/piano.jpg";
import guitare from "../images/guitare.jpg";
import useWindowDimensions from "../../../../utils/hooks/useWindowDimensions";
import withScrollbar from "../../../../utils/hooks/withScrollbar";
import mergeRefs from "../../../../utils/functions/mergeRefs";

function Element({ image, children }) {
	return (
		<div className='musique-element-div'>
			<img className='image' width='400px' src={image} alt='' />
			<div className='content'>{children}</div>
		</div>
	);
}

const Musique = forwardRef(({onScroll}, ref) => {
	const { width: winWidth, height: winHeight } = useWindowDimensions();

	const [computedHeight, computeHeight] = useState("auto");

	return (
		<div
			className='musique-elements-div'
			style={{ width: winWidth * 0.6, height: computedHeight }}
			ref={mergeRefs(ref, (node) => node && computeHeight(Math.max(winHeight - node.offsetParent.offsetTop - 20, 60)))}
			onScroll={onScroll}>
			<Element image={piano}>
				<span>10 ans de pratique</span>
				<span>Autodidacte</span>
			</Element>
			<Element image={guitare}>
				<span>Quelques mois de pratique</span>
			</Element>
		</div>
	);
});

export default withScrollbar(Musique);
