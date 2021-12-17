function ButtonsSelector({ buttons, selected, setSelected, column = false, ...rest }) {
	return (
		<div className={`button-selector-div${column ? ' column': ''}`} {...rest}>
			{buttons.map((text) => {
				const i = buttons.indexOf(text);
				return (
					<button
						key={text}
						className={selected === i ? "button-selector selected" : "button-selector"}
						onClick={() => setSelected(selected === i ? null : i)}>
						{text}
					</button>
				);
			})}
		</div>
	);
}

export default ButtonsSelector;
