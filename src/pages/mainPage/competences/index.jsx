import { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoLanguageOutline } from "react-icons/io5";

import FadeProps from "../../../utils/components/FadeProps";
import Code from "./rubriques/Code";
import Langues from "./rubriques/Langues";
import Techniques from "./rubriques/Techniques";
import RubriqueSelector from "./RubriqueSelector";

export default function Competences() {
	const [selected, setSelected] = useState(null);

	return (
		<>
			<RubriqueSelector
				selected={selected}
				setSelected={setSelected}
				components={[
					{
						ImageComponent: IoLanguageOutline,
						index: 0,
					},
					{
						ImageComponent: HiOutlineDesktopComputer,
						index: 1,
					},
					{
						ImageComponent: BsCodeSlash,
						index: 2,
					},
				]}
			/>
			<br />
			<FadeProps>
				{selected === 0 ? <Langues /> : selected === 1 ? <Techniques /> : selected === 2 ? <Code /> : <></>}
			</FadeProps>
		</>
	);
}
