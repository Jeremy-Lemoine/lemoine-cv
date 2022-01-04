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

	return (
		<>
			<RubriqueSelector
				selected={selected}
				setSelected={setSelected}
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
					},
				]}
			/>
			<br />
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
					<></>
				)}
			</FadeProps>
		</>
	);
}
