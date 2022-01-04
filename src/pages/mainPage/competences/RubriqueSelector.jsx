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

export default function RubriqueSelector({ selected, setSelected, components }) {
	return (
		<div className='rubrique-selector'>
			{components.map(({ index, ImageComponent }) => {
				return (
					<BoutonImage
						key={index}
						ImageComponent={ImageComponent}
						selected={selected}
						setSelected={setSelected}
						index={index}
					/>
				);
			})}
		</div>
	);
}
