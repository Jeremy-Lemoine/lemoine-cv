import { useMemo } from "react";

import useWindowDimensions from "../../../../utils/hooks/useWindowDimensions";

export default function JeuxComplexes() {
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
				J'aime les jeux que je considère <important-word>complexes</important-word>.
				<br />
				J'ai déjà parlé dans la section précédente des <important-word>énigmes</important-word>, que je vois comme un jeu complexe où le
				but est de trouver la solution de la manière la plus élégante et la plus rapide qui soit.
				<br />
				<br />
				Je joue maintenant depuis assez longtemps aux <important-word>échecs</important-word>. C'est un jeu que j'aime beaucoup car il est
				très profond et qu'il y a toujours plus à <important-word>apprendre</important-word>. C'est par ailleurs un des rares jeux très
				anciens où les joueurs humains ont pendant très longtemps surpassé les machines ; ce n'est que très
				récemment avec des programmes comme Stockfish, AlphaZero ou encore Leela que le joueur humain a été
				battu.
				<br />
				Il y a un point très important concernant le jeu des échecs : cela fait plus de <important-word>500 ans</important-word> que les
				règles du jeu sont les mêmes, et pourtant ce jeu est toujours très populaire et compétitif. Cela en dit
				très long sur la qualité du jeu.
				<br />
				<br />
				Je suis très intéressé par les <important-word>Rubik's Cube</important-word>, et ce depuis très longtemps. J'en ai acheté
				énormément, à chaque fois avec une <important-word>forme différente</important-word> : 2x2x2, 3x3x3, 4x4x4, 5x5x5, Mirror 3x3x3,
				Ghost Cube, Skewb, Skewb ultimate, Gear Cube, Megaminx, Pyraminx, Square One (c'est celui qui m'a le
				plus intrigué), 3x3x3 de forme spéciale comme une maison ou autre.
				<br />
				Au fil du temps, j'ai fini par me concentrer sur le <important-word>3x3x3</important-word> pour le résoudre en moyenne en{" "}
				<important-word>30 secondes</important-word>, en oubliant certains des autres cubes qui sont devenus ajourd'hui plus une
				décoration qu'autre chose.
				<br />
				<br />
				Au niveau des jeux vidéos, je joue surtout à <important-word>League Of Legends</important-word>, qui est pour moi le jeu par
				excellence en termes de <important-word>stratégie</important-word> et de complexité. C'est un jeu qui demande une{" "}
				<important-word>connaissance</important-word> de celui-ci très poussée si on veut ne serait-ce que comprendre ce qui se passe à
				l'écran en voyant une partie se dérouler. Pour gagner dans ce jeu, il faut savoir mettre à profit ses
				connaissances tout en ayant une compréhension globale de ce qui se passe dans la partie (ce qui
				s'appelle la <important-word>macro</important-word>) ce qui demande une grosse concentration et une forte aptitude de prise de
				recul.
				<br />
			</span>
		</div>
	);
}
