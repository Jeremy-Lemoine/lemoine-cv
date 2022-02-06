import { useState } from "react";
import { SiJavascript, SiJava, SiPython, SiHtml5, SiCss3, SiCsharp, SiOcaml } from "react-icons/si";

import useWindowDimensions from "../../../../utils/hooks/useWindowDimensions";
import ScrollbarComponent from "../../../../utils/hooks/ScrollbarComponent";
import { useTranslation } from "react-i18next";
import { espace } from "../../../../utils/others/shortcuts";

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
				{espace}{espace}{espace}
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

	const { t } = useTranslation();

	const { code } = t("competences_page", { returnObjects: true });

	return (
		<ScrollbarComponent
			width={winWidth * 0.6}
			height={computedHeight}
			forRef={(node) => node && computeHeight(Math.max(winHeight - node.offsetParent.offsetTop - 20, 60))}>
			<div className='langages-programmation-container'>
				<div className='langages-programmation-div'>
					<Langage
						Icon={SiJavascript}
						titre='JavaScript'
						details='JS - NodeJS - ReactJS'
						niveau={code.javascript.niveau}
					/>
					<Langage Icon={SiJava} titre='Java' niveau={code.java.niveau} />
					<Langage Icon={SiPython} titre='Python' details={code.python.details} niveau={code.python.niveau} />
					<Langage
						Icon={({ size, className }) => (
							<div className={className}>
								<SiHtml5 size={size} />
								<SiCss3 size={size} />
							</div>
						)}
						titre='HTML / CSS'
						details='HTML5 - CSS3 - SCSS'
						niveau={code.html_css.niveau}
					/>
					<Langage Icon={SiOcaml} titre='OCaml' niveau={code.ocaml.niveau} />
					<Langage titre='Scripts' details='Batch - Shell' niveau={code.scripts.niveau} />
					<Langage Icon={SiCsharp} titre='C#' niveau={code.csharp.niveau} />
				</div>
			</div>
		</ScrollbarComponent>
	);
}
