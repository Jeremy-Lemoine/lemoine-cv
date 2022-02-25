import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import { useMediaQuery } from "react-responsive";

import FadeProps from "../../utils/components/FadeProps";
import ButtonsSelector from "../../utils/components/ButtonsSelector";
import sectionsList from "./sectionsList";
import Header from "./Header";
import LanguageSelector from "./LanguageSelector";

import LoadImages from "../../images";
import MobileComingSoon from "./MobileComingSoon";

function Home() {
	const [selected, setSelected] = useState(0);

	const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

	const { t } = useTranslation();

	return (
		<>
			{isPortrait && <MobileComingSoon />}
			<LoadImages /> {/* We load images (not displayed) to avoid loading animations later */}
			<LanguageSelector />
			<Header />
			<ToastContainer />
			<br />
			<ButtonsSelector
				buttons={sectionsList.map((section) => t(section.name))}
				selected={selected}
				setSelected={setSelected}
				style={{ marginBottom: "calc(var(--technique-div-gap-between-techniques) / 2)" }}
			/>
			<FadeProps>
				{selected !== null ? sectionsList[selected].component : <>{t("index_choose_section")}</>}
			</FadeProps>
		</>
	);
}

export default Home;
