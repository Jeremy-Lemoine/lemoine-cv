// eslint-disable-next-line
class Field {
	constructor(portrait, paysage) {
		this.values = {
			portrait,
			paysage,
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
