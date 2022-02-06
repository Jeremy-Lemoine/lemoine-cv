import { useTranslation } from "react-i18next";
import replace from "react-string-replace";

export default function Roller() {
	const { t } = useTranslation();

	const { rollers } = t("loisirs_page", { returnObjects: true });
	
	return (
		<span>
			{replace(
				replace(rollers.join("\n"), "\n", () => <br />),
				/\[([a-zA-Z0-9 \u00C0-\u017F]*)\]/g, // \u00C0-\u017F is for accents
				(match) => (
					<important-word>{match}</important-word>
				)
			)}
		</span>
	);
}
