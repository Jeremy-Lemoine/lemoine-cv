import banijayLogo from "./banijayLogo.png";
import guitare from "./guitare.jpg";
import imta from "./imta.svg";
import lagardereLogo from "./lagardereLogo.png";
import logo from "./logo.png";
import LPDN from "./LPDN.png";
import photoPro from "./photoPro.jpg";
import piano from "./piano.jpg";

export default function LoadImages() {
	return [piano, guitare, banijayLogo, imta, lagardereLogo, logo, LPDN, photoPro].map((src) => (
		<img key={src} src={src} style={{ display: "none" }} alt='' />
	));
}

export { piano, guitare, banijayLogo, imta, lagardereLogo, logo, LPDN, photoPro };
