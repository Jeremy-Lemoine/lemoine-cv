import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import replace from "react-string-replace";

import useWindowDimensions from "../../../../utils/hooks/useWindowDimensions";

export default function Mathematiques() {
	const { width: winWidth } = useWindowDimensions();

	const { t } = useTranslation();

	const { mathematiques } = t("loisirs_page", { returnObjects: true });

	const style = useMemo(
		() => ({
			width: winWidth * 0.6,
		}),
		[winWidth]
	);

	return (
		<div style={style}>
			<span>
				{replace(
					replace(mathematiques.join("\n"), "\n", () => <br />),
					/\[([a-zA-Z0-9 \u00C0-\u017F]*)\]/g, // \u00C0-\u017F is for accents
					(match) => (
						<important-word>{match}</important-word>
					)
				)}
			</span>
		</div>
	);
}
