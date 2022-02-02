import { useMemo } from "react";

import useWindowDimensions from "../../../../utils/hooks/useWindowDimensions";

export default function Mathematiques() {
	const { width: winWidth } = useWindowDimensions();

	const style = useMemo(
		() => ({
			width: winWidth * 0.6,
		}),
		[winWidth]
	);

	return (
		<div style={style}>
			<span>
				Je suis passionné de <gras-orange>mathématiques</gras-orange> depuis l'enfance.
				<br />
				<br />
				C'est un domaine qui m'inspire et me permet de mieux appréhender le monde qui m'entoure.
				<br />
				J'aime trouver au sein des mathématiques des théorèmes / conjectures qui me paraîssent soit paradoxales,
				soit très <gras-orange>compliquées</gras-orange>, soit absurdes ou <gras-orange>intrigantes</gras-orange>.
				<br />
				<br />
				Je m'intéresse beaucoup à la topologie et à l'algèbre linéaire.
				<br />
				<br />
				<br />
				En ce sens, j'adore les <gras-orange>énigmes</gras-orange>. J'aime particulièrement, en plus des énigmes très <gras-orange>complexes</gras-orange>, deux cas
				d'énigmes différents : les énigmes qui paraîssent très complexes mais qui sont en fait très simples, et
				les énigmes qui sont complexes mais très simples si on les prend du <gras-orange>bon point de vue</gras-orange>.
			</span>
		</div>
	);
}
