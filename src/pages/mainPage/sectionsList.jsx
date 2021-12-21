import Experience from "./experience";
import Formation from "./formation";
import Informations from "./informations";

const sectionsList = [
	{
		name: "informations_name",
		component: <Informations />,
	},
	{
		name: "formations_name",
		component: <Formation />,
	},
	{
		name: "experience_name",
		component: <Experience />,
	}
];

export default sectionsList;
