class Field {
	constructor(portrait, paysage) {
		this.values = {
			portrait: portrait,
			paysage: paysage,
		};
	}
	getValues() {
		return this.values;
	}
}

const css = {};

const updateCSS = (typeScreen) => {
	Object.entries(css).forEach(([variable, field]) => {
		document.documentElement.style.setProperty(variable, field.getValues()[typeScreen]);
	});
};

export default updateCSS;
