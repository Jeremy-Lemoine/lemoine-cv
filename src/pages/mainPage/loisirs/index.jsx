import { IoMusicalNotes } from "react-icons/io5";
import { AiFillCode } from "react-icons/ai";
import { FaLessThanEqual } from "react-icons/fa";
import { GiChessKnight } from "react-icons/gi";
import { useState } from "react";

import Musique from "./rubriques/Musique";
import Informatique from "./rubriques/Informatique";
import JeuxComplexes from "./rubriques/JeuxComplexes";
import Mathematiques from "./rubriques/Mathematiques";
import RubriqueSelector from "../competences/RubriqueSelector";
import FadeProps from "../../../utils/components/FadeProps";

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
					//TODO: Rollers
				]}
			/>
			<br />
			<div style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<FadeProps>
					{selected === 0 ? (
						<Musique />
					) : selected === 1 ? (
						<Informatique />
					) : selected === 2 ? (
						<Mathematiques />
					) : selected === 3 ? (
						<JeuxComplexes />
					) : (
						<>
							Je suis un passionné de musique, d'informatique, et de jeux complexes stratégiques.
							<br />
							Clique sur les icônes ci-dessus pour en savoir plus.
						</>
					)}
				</FadeProps>
			</div>
		</>
	);
}
