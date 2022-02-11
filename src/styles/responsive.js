// eslint-disable-next-line
class Field {
	constructor(paysage, portrait) {
		this.values = {
			portrait,
			paysage,
		};
	}
	getValues() {
		return this.values;
	}
}

const css = {
	"--informations-container-flex-flow": new Field("row", "column"),
	"--informations-container-text-container-max-width": new Field("40vw", "none"),
	"--page-font-size": new Field("17px", "21px"),
	"--rubrique-selector-icon-size": new Field("30px", "70px"),
	"--technique-div-gap-between-techniques": new Field("60px", "120px"),
	"--langage-programmation-padding": new Field("30px", "50px"),
	"--langage-programmation-details-font-size": new Field("x-small", "small"),
	"--langage-programmation-niveau-font-size": new Field("small", "large"),
	"--langues-div-gap-between-lines": new Field("20px", "50px"),
	"--musique-image-width": new Field("40%", "70%"),
	"--musique-content-width": new Field("20%", "50%"),
	"--musique-div-gap-between-instruments": new Field("0", "30px"),
	"--header-max-width": new Field("35vw", "50vw"),
};

const updateCSS = (typeScreen) => {
	Object.entries(css).forEach(([variable, field]) => {
		document.documentElement.style.setProperty(variable, field.getValues()[typeScreen]);
	});
};

export default updateCSS;
