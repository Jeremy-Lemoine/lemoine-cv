import { useTranslation } from "react-i18next";
import reactStringReplace from "react-string-replace";

export default function Header() {
	const { t } = useTranslation();

	return (
		<div
			className='bigger-hover'
			style={{
				display: "inline-block",
				marginBottom: "30px",
				border: "2px solid var(--orange-3)",
				borderRadius: "15px",
				userSelect: "none",
				padding: "10px 30px",
				boxShadow: "5px 5px 10px black",
				maxWidth: "var(--header-max-width)",
			}}>
			<p
				style={{
					margin: 0,
					fontSize: "calc(var(--page-font-size) * 1.1)",
					color: "var(--green-3)",
					fontWeight: "bold",
					marginBottom: "8px",
					WebkitTextStroke: "1px var(--white)",
				}}>
				Jérémy Lemoine Zemmour
			</p>
			<p
				style={{
					margin: 0,
					fontSize: "calc(var(--page-font-size) * 0.9)",
				}}>
				{reactStringReplace(t("header_school"), "%ecole", (_, index) => (
					<span key={index} className='rose'>IMT Atlantique</span>
				))}
			</p>
		</div>
	);
}
