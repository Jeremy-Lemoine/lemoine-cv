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
				J'aime les jeux que je considère <f>complexes</f>.
				<br />
				J'ai déjà parlé dans la section précédente des <f>énigmes</f>, que je vois comme un jeu complexe où le
				but est de trouver la solution de la manière la plus élégante et la plus rapide qui soit.
				<br />
				<br />
				Je joue maintenant depuis assez longtemps aux <f>échecs</f>. C'est un jeu que j'aime beaucoup car il est
				très profond et qu'il y a toujours plus à <f>apprendre</f>. C'est par ailleurs un des rares jeux très
				anciens où les joueurs humains ont pendant très longtemps surpassé les machines ; ce n'est que très
				récemment avec des programmes comme Stockfish, AlphaZero ou encore Leela que le joueur humain a été
				battu.
				<br />
				Il y a un point très important concernant le jeu des échecs : cela fait plus de <f>500 ans</f> que les
				règles du jeu sont les mêmes, et pourtant ce jeu est toujours très populaire et compétitif. Cela en dit
				très long sur la qualité du jeu.
				<br />
				<br />
				Je suis très intéressé par les <f>Rubik's Cube</f>, et ce depuis très longtemps. J'en ai acheté
				énormément, à chaque fois avec une <f>forme différente</f> : 2x2x2, 3x3x3, 4x4x4, 5x5x5, Mirror 3x3x3,
				Ghost Cube, Skewb, Skewb ultimate, Gear Cube, Megaminx, Pyraminx, Square One (c'est celui qui m'a le
				plus intrigué), 3x3x3 de forme spéciale comme une maison ou autre.
				<br />
				Au fil du temps, j'ai fini par me concentrer sur le <f>3x3x3</f> pour le résoudre en moyenne en{" "}
				<f>30 secondes</f>, en oubliant certains des autres cubes qui sont devenus ajourd'hui plus une
				décoration qu'autre chose.
				<br />
				<br />
				Au niveau des jeux vidéos, je joue surtout à <f>League Of Legends</f>, qui est pour moi le jeu par
				excellence en termes de <f>stratégie</f> et de complexité. C'est un jeu qui demande une{" "}
				<f>connaissance</f> de celui-ci très poussée si on veut ne serait-ce que comprendre ce qui se passe à
				l'écran en voyant une partie se dérouler. Pour gagner dans ce jeu, il faut savoir mettre à profit ses
				connaissances tout en ayant une compréhension globale de ce qui se passe dans la partie (ce qui
				s'appelle la <f>macro</f>) ce qui demande une grosse concentration et une forte aptitude de prise de
				recul.
				<br />
			</span>
		</div>
	);
}
