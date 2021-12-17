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

const css = {
	"--navigation-bar-height": new Field("120px", "calc(50px + 2vh)"),
	"--navbar-item-width": new Field("150px", "150px"),
	"--navbar-item-text-font-size": new Field("calc(15px + 0.2vh)", "calc(15px + 0.2vh)"),
	"--title-font-size": new Field("35px", "25px"),
	"--title-icon-size": new Field("25px", "calc(30px + 0.2vh)"),
};

const updateCSS = (typeScreen) => {
	Object.entries(css).forEach(([variable, field]) => {
		document.documentElement.style.setProperty(variable, field.getValues()[typeScreen]);
	});
};

export default updateCSS;
