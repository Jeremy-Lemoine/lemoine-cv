function BoutonImage({ ImageComponent, index, selected, setSelected, mirror }) {
	return (
		<ImageComponent
			className={`bouton-image${selected === index ? " selected" : ""}`}
			onClick={() => setSelected(index)}
			size='30px'
			style={{ padding: "10px", transform: mirror && "scaleX(-1)" }}
		/>
	);
}

export default function RubriqueSelector({ selected, setSelected, components }) {
	return (
		<div className='rubrique-selector'>
			{components.map(({ ImageComponent, mirror }, index) => {
				return (
					<BoutonImage
						key={index}
						ImageComponent={ImageComponent}
						selected={selected}
						setSelected={setSelected}
						index={index}
						mirror={mirror}
					/>
				);
			})}
		</div>
	);
}
