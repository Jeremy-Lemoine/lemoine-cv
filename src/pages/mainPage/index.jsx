import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";

import FadeProps from "../../utils/components/FadeProps";
import ButtonsSelector from "../../utils/components/ButtonsSelector";
import sectionsList from "./sectionsList";
import Header from "./Header";
import LanguageSelector from "./LanguageSelector";

function Home() {
	const [selected, setSelected] = useState(1);

	const { t } = useTranslation();

	return (
		<>
			<LanguageSelector />
			<Header />
			<ToastContainer />
			<br />
			<ButtonsSelector
				buttons={sectionsList.map((section) => t(section.name))}
				selected={selected}
				setSelected={setSelected}
				style={{ marginBottom: "30px" }}
			/>
			<FadeProps>
				{selected !== null ? sectionsList[selected].component : <>Veuillez choisir une section.</>}
			</FadeProps>
		</>
	);
}

export default Home;
