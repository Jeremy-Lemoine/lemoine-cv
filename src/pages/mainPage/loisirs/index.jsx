import { IoMusicalNotes } from "react-icons/io5";
import { AiFillCode } from "react-icons/ai";
import { FaLessThanEqual } from "react-icons/fa";
import { GiChessKnight, GiRollerSkate } from "react-icons/gi";
import { useState } from "react";

import Musique from "./rubriques/Musique";
import Informatique from "./rubriques/Informatique";
import JeuxComplexes from "./rubriques/JeuxComplexes";
import Mathematiques from "./rubriques/Mathematiques";
import RubriqueSelector from "../competences/RubriqueSelector";
import FadeProps from "../../../utils/components/FadeProps";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import ScrollbarComponent from "../../../utils/hooks/ScrollbarComponent";
import Roller from "./rubriques/Roller";

const LocalScrollComponent = ({ Component }) => {
	const { width: winWidth, height: winHeight } = useWindowDimensions();

	const [computedHeight, computeHeight] = useState("auto");

	return (
		<ScrollbarComponent
			width={winWidth * 0.6}
			height={computedHeight}
			forRef={(node) => node && computeHeight(Math.max(winHeight - node.offsetParent.offsetTop - 50, 60))}>
			<Component />
		</ScrollbarComponent>
	);
};

export default function Loisirs() {
	const [selected, setSelected] = useState(null);

	const setSelectedAndDeselect = (index) => {
		setSelected((selected) => (selected === index ? null : index));
	};

	return (
		<>
			<RubriqueSelector
				selected={selected}
				setSelected={setSelectedAndDeselect}
				components={[
					{
						ImageComponent: IoMusicalNotes,
						index: 0,
					},
					{
						ImageComponent: AiFillCode,
						index: 1,
					},
					{
						ImageComponent: FaLessThanEqual,
						index: 2,
					},
					{
						ImageComponent: GiChessKnight,
						index: 3,
						mirror: true,
					},
					{
						ImageComponent: GiRollerSkate,
						index: 4,
					},
					//TODO: Rollers
				]}
			/>
			<br />
			<FadeProps>
				{selected === 0 ? (
					<LocalScrollComponent Component={Musique} />
				) : selected === 1 ? (
					<LocalScrollComponent Component={Informatique} />
				) : selected === 2 ? (
					<LocalScrollComponent Component={Mathematiques} />
				) : selected === 3 ? (
					<LocalScrollComponent Component={JeuxComplexes} />
				) : selected === 4 ? (
					<LocalScrollComponent Component={Roller} />
				) : (
					<LocalScrollComponent
						Component={() => (
							<>
								Je suis un passionné de musique, d'informatique, et de jeux complexes stratégiques.
								<br />
								Clique sur les icônes ci-dessus pour en savoir plus.
							</>
						)}
					/>
				)}
			</FadeProps>
		</>
	);
}
