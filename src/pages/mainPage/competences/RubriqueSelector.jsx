function BoutonImage({ ImageComponent, index, selected, setSelected, mirror }) {
	return (
		<ImageComponent
			className={`bouton-image${selected === index ? " selected" : ""}`}
			onClick={() => setSelected(index)}
			size='var(--rubrique-selector-icon-size)'
			style={{ padding: "calc(var(--rubrique-selector-icon-size) / 3)", transform: mirror && "scaleX(-1)" }}
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
