import { useEffect, useState } from "react";
import { changeLanguage } from "i18next";

import ButtonsSelector from "../../utils/components/ButtonsSelector";
import info from "../../languages/info";

export default function LanguageSelector() {
	const [selected, setSelected] = useState(0);

	useEffect(() => {
		changeLanguage(info[selected].language);
	}, [selected]);

	return (
		<ButtonsSelector
			buttons={info.map(({ label }) => label)}
			selected={selected}
			setSelected={setSelected}
			style={{
				position: "fixed",
				right: "50px",
				top: "50px",
				border: "none",
				zIndex: "2"
			}}
			styleButton={{
				fontSize: "calc(var(--page-font-size) * 0.8)",
				borderRadius: "20px",
				boxShadow: "0 0 10px black",
				margin: "10px",
				padding: "5px 15px",
			}}
			notNull
			column
		/>
	);
}
