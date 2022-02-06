import { useTranslation } from "react-i18next";
import replace from "react-string-replace";

export default function Informatique() {
	const { t } = useTranslation();

	const { informatique } = t("loisirs_page", { returnObjects: true });

	return (
		<span>
			{replace(
				replace(informatique.join("\n"), "\n", () => <br />),
				/\[([a-zA-Z0-9 \u00C0-\u017F]*)\]/g, // \u00C0-\u017F is for accents
				(match) => (
					<important-word>{match}</important-word>
				)
			)}
		</span>
	);
}
