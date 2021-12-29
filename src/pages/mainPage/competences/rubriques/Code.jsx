import { useState } from "react";
import { SiJavascript, SiJava, SiPython, SiHtml5, SiCss3, SiCsharp, SiOcaml } from "react-icons/si";

import useWindowDimensions from "../../../../utils/hooks/useWindowDimensions";

function Langage({
	Icon = () => {
		return <></>;
	},
	titre,
	details,
	niveau,
}) {
	return (
		<div className='langage-programmation'>
			<div className='header'>
				<Icon size='30px' className='image' />
				<span className='titre'>{titre}</span>
			</div>
			<div className='details'>{details}</div>
			<span className='niveau'>{niveau}</span>
		</div>
	);
}

export default function Code() {
	const { width: winWidth, height: winHeight } = useWindowDimensions();

	const [computedHeight, computeHeight] = useState("auto");

	return (
		<div
			className='langages-programmation-container'
			style={{ width: winWidth * 0.6, height: computedHeight }}
			ref={(node) => node && computeHeight(Math.max(winHeight - node.offsetTop - 20, 60))}>
			<div className='langages-programmation-div'>
				<Langage Icon={SiJavascript} titre='JavaScript' details='JS - NodeJS - ReactJS' niveau='Coup de cœur' />
				<Langage Icon={SiJava} titre='Java' niveau='Étudié en profondeur' />
				<Langage
					Icon={SiPython}
					titre='Python'
					details='Tkinter - Impératif / Objet - Module typing'
					niveau="Le plus à l'aise"
				/>
				<Langage
					Icon={({ size, className }) => (
						<div className={className}>
							<SiHtml5 size={size} />
							<SiCss3 size={size} />
						</div>
					)}
					titre='HTML / CSS'
					details='HTML5 - CSS3 - SCSS'
					niveau='Indispensable'
				/>
				<Langage Icon={SiOcaml} titre='OCaml' niveau={"Langage fonctionnel\nApprentissage intéressant"} />
				<Langage titre='Scripts' details='Batch - Shell' niveau='Bon niveau' />
				<Langage Icon={SiCsharp} titre='C#' niveau='Quelques bases' />
			</div>
		</div>
	);
}
