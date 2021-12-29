import { BsCodeSlash } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoLanguageOutline } from "react-icons/io5";

function BoutonImage({ ImageComponent, index, selected, setSelected }) {
	return (
		<ImageComponent
			className={`bouton-image${selected === index ? " selected" : ""}`}
			onClick={() => setSelected(index)}
			size='30px'
			style={{ padding: "10px" }}
		/>
	);
}

export default function RubriqueSelector({ selected, setSelected }) {
	return (
		<div className='rubrique-selector'>
			<BoutonImage ImageComponent={IoLanguageOutline} selected={selected} setSelected={setSelected} index={0} />
			<BoutonImage
				ImageComponent={HiOutlineDesktopComputer}
				selected={selected}
				setSelected={setSelected}
				index={1}
			/>
			<BoutonImage ImageComponent={BsCodeSlash} selected={selected} setSelected={setSelected} index={2} />
		</div>
	);
}
