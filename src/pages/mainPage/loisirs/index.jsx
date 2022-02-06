import { IoMusicalNotes } from "react-icons/io5";
import { AiFillCode } from "react-icons/ai";
import { FaLessThanEqual } from "react-icons/fa";
import { GiChessKnight, GiRollerSkate } from "react-icons/gi";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import replace from "react-string-replace";

import Musique from "./rubriques/Musique";
import Informatique from "./rubriques/Informatique";
import JeuxComplexes from "./rubriques/JeuxComplexes";
import Mathematiques from "./rubriques/Mathematiques";
import RubriqueSelector from "../competences/RubriqueSelector";
import FadeProps from "../../../utils/components/FadeProps";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import ScrollbarComponent from "../../../utils/hooks/ScrollbarComponent";
import Roller from "./rubriques/Roller";
import WidthAnimatedTextDiv from "../../../utils/components/WidthAnimatedTextDiv";

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

const componentsList = [
	{
		header: "Musique",
		ImageComponent: IoMusicalNotes,
		Component: Musique,
	},
	{
		header: "Informatique",
		ImageComponent: AiFillCode,
		Component: Informatique,
	},
	{
		header: "Mathématiques",
		ImageComponent: FaLessThanEqual,
		Component: Mathematiques,
	},
	{
		header: "Jeux complexes",
		ImageComponent: GiChessKnight,
		mirror: true,
		Component: JeuxComplexes,
	},
	{
		header: "Roller",
		ImageComponent: GiRollerSkate,
		Component: Roller,
	},
];

const DEFAULT_HEADER = "Loisirs";

export default function Loisirs() {
	const [selected, setSelected] = useState(null);
	const [actualHeader, setActualHeader] = useState(DEFAULT_HEADER);

	const { t } = useTranslation();

	const { no_selection_message } = t("loisirs_page", { returnObjects: true });

	const AnimatedHeaderRefForTextChanging = useRef();

	const setHeader = (text) => {
		setActualHeader((_) => text);
		if (AnimatedHeaderRefForTextChanging && AnimatedHeaderRefForTextChanging.current) {
			AnimatedHeaderRefForTextChanging.current.changeText(text);
		}
	};

	const setSelectedAndDeselect = (index) => {
		setSelected((selected) => {
			if (selected === index) {
				setHeader(DEFAULT_HEADER);
				return null;
			} else {
				setHeader(componentsList[index].header);
				return index;
			}
		});
	};

	return (
		<>
			<RubriqueSelector selected={selected} setSelected={setSelectedAndDeselect} components={componentsList} />
			<WidthAnimatedTextDiv ref={AnimatedHeaderRefForTextChanging} animationLength={1000} delayBefore={200}>
				{actualHeader}
			</WidthAnimatedTextDiv>
			<FadeProps animationLength={200} delayBetween={1000}>
				{selected !== null && selected < componentsList.length ? (
					<LocalScrollComponent Component={componentsList[selected].Component} />
				) : (
					<LocalScrollComponent
						Component={() => replace(no_selection_message.join("\n"), "\n", () => <br />)}
					/>
				)}
			</FadeProps>
		</>
	);
}
