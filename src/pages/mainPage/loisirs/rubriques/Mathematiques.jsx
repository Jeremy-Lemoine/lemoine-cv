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
				Je suis passionné de <important-word>mathématiques</important-word> depuis l'enfance.
				<br />
				<br />
				C'est un domaine qui m'inspire et me permet de mieux appréhender le monde qui m'entoure.
				<br />
				J'aime trouver au sein des mathématiques des théorèmes / conjectures qui me paraîssent soit paradoxales,
				soit très <important-word>compliquées</important-word>, soit absurdes ou <important-word>intrigantes</important-word>.
				<br />
				<br />
				Je m'intéresse beaucoup à la topologie et à l'algèbre linéaire.
				<br />
				<br />
				<br />
				En ce sens, j'adore les <important-word>énigmes</important-word>. J'aime particulièrement, en plus des énigmes très <important-word>complexes</important-word>, deux cas
				d'énigmes différents : les énigmes qui paraîssent très complexes mais qui sont en fait très simples, et
				les énigmes qui sont complexes mais très simples si on les prend du <important-word>bon point de vue</important-word>.
			</span>
		</div>
	);
}
