import Competences from "./competences";
import Experience from "./experience";
import Formation from "./formation";
import Informations from "./informations";
import Loisirs from "./loisirs";

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
	},
	{
		name: "competences_name",
		component: <Competences />,
	},
	{
		name: "loisirs_name",
		component: <Loisirs />,
	},
];

export default sectionsList;
