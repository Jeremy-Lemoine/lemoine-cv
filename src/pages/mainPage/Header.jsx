export default function Header() {
	return (
		<div
			className="bigger-hover"
			style={{
				display: "inline-block",
				marginBottom: "30px",
				border: "2px solid var(--orange-3)",
				borderRadius: "15px",
				userSelect: "none",
				padding: "10px 30px",
				boxShadow: "5px 5px 10px black",
				maxWidth: "35vw",
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
				Deuxième année de formation d'ingénieur généraliste à <span className='rose'>IMT Atlantique</span>{" "}
				spécialité Développement Logiciel
			</p>
		</div>
	);
}
