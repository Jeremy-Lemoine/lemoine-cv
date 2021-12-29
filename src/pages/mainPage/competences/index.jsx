import { useState } from "react";
import FadeProps from "../../../utils/components/FadeProps";
import Code from "./rubriques/Code";
import Langues from "./rubriques/Langues";
import Techniques from "./rubriques/Techniques";
import RubriqueSelector from "./RubriqueSelector";

export default function Competences() {
	const [selected, setSelected] = useState(null);

	return (
		<>
			<RubriqueSelector selected={selected} setSelected={setSelected} />
			<br />
			<FadeProps>
				{selected === 0 ? <Langues /> : selected === 1 ? <Techniques /> : selected === 2 ? <Code />: <></>}
			</FadeProps>
		</>
	);
}
