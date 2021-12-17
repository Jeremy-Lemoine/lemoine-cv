function ButtonsSelector({ buttons, selected, setSelected, column = false, styleButton, notNull = false, ...rest }) {
	return (
		<div className={`button-selector-div${column ? " column" : ""}`} {...rest}>
			{buttons.map((text) => {
				const i = buttons.indexOf(text);
				return (
					<button
						key={text}
						className={selected === i ? "button-selector selected" : "button-selector"}
						onClick={() => setSelected(selected === i ? (!notNull ? null : i) : i)}
						style={styleButton}>
						{text}
					</button>
				);
			})}
		</div>
	);
}

export default ButtonsSelector;
