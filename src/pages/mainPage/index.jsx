import FadeProps from "../../utils/components/FadeProps";
import { useState } from "react";
import ButtonsSelector from "../../utils/components/ButtonsSelector";
import sectionsList from "./sectionsList";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import LanguageSelector from "./LanguageSelector";

function Home() {
	const [selected, setSelected] = useState(0);

	const { t } = useTranslation();

	return (
		<>
			<LanguageSelector />
			<Header />
			<br />
			<ButtonsSelector
				buttons={sectionsList.map((section) => t(section.name))}
				selected={selected}
				setSelected={setSelected}
				style={{ marginBottom: "30px" }}
			/>
			<FadeProps>{selected !== null && sectionsList[selected].component}</FadeProps>
		</>
	);
}

export default Home;
