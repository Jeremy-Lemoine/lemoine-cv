import banijayLogo from "./banijayLogo.png";
import guitare from "./guitare.jpg";
import imta from "./imta.svg";
import lagardereLogo from "./lagardereLogo.png";
import logo from "./logo.png";
import LPDN from "./LPDN.png";
import photoPro from "./photoPro.jpg";
import piano from "./piano.jpg";
import oxylLogo from "./oxylLogo.png";

export default function LoadImages() {
    return (
        <div className='preloaded-images'>
            {[piano, guitare, banijayLogo, imta, lagardereLogo, logo, LPDN, photoPro, oxylLogo].map((src) => (
                <img key={src} src={src} alt='' />
            ))}
        </div>
    );
}

export { piano, guitare, banijayLogo, imta, lagardereLogo, logo, LPDN, photoPro, oxylLogo };
