import { useEffect, useState } from "react";
import { changeLanguage } from "i18next";

import ButtonsSelector from "../../utils/components/ButtonsSelector";
import info from '../../languages/info';

export default function LanguageSelector() {

    const [selected, setSelected] = useState(0);

    useEffect(() => {
        changeLanguage(info[selected].language);
    }, [selected])

    return <ButtonsSelector 
        buttons={info.map(({label}) => label)}
        selected={selected}
        setSelected={setSelected}
        style={{
            position: "absolute",
            left: "20px",
            top: "20px",
            border: 'none'
        }}
        styleButton={{
            fontSize: "calc(var(--page-font-size) * 0.4)",
            borderRadius: "20px",
            boxShadow: "0 0 10px black",
            margin: "10px"
        }}
        notNull
    />
}