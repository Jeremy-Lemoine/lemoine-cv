import { useCallback } from "react";
import { IoSchoolSharp } from "react-icons/io5";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaSchool } from "react-icons/fa";
import { FcDiploma2 } from "react-icons/fc";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import imta from "./imta.svg";
import LPDN from "./LPDN.png";

function Formation() {
	const Element = useCallback(
		({ date, children, icon, iconBackground, iconColor, titre, sousTitre, link, image }) => {
			return (
				<VerticalTimelineElement
					date={date}
					contentStyle={{ backgroundColor: "transparent" }}
					contentArrowStyle={{ display: "none" }}
					iconStyle={{ background: iconBackground, color: iconColor }}
					icon={icon}>
					{link ? (
						<a href={link} style={{ textDecoration: "none" }}>
							<h3 style={{ marginBottom: 0 }}>
								<button className='link' style={{ color: "var(--orange-2)" }}>
									{titre}
								</button>
							</h3>
						</a>
					) : (
						<h3 style={{ marginBottom: 0 }}>{titre}</h3>
					)}
					<font size='1'>{sousTitre}</font>
					<br />
					<br />
					{image}
					{children}
					<br />
				</VerticalTimelineElement>
			);
		},
		[]
	);

	return (
		<VerticalTimeline layout='1-column' lineColor='var(--orange-3)' className='timeline'>
			<Element
				date="2020 - Ajourd'hui"
				iconBackground='var(--dark-gray)'
				iconColor='#afcb37'
				icon={<IoSchoolSharp />}
				titre='IMT Atlantique'
				link='https://www.imt-atlantique.fr/fr'
				sousTitre='(Nantes)'
				image={
					<img
						src={imta}
						alt=''
						width='308px'
						height='200px'
						style={{ position: "absolute", top: "calc(50% - 100px)", left: "-320px" }}
					/>
				}>
				<p>
					École d'ingénieur généraliste
					<br /> Spécialité Développement Logiciel
				</p>
			</Element>
			<Element
				date='2018 - 2020'
				iconBackground='var(--dark-gray)'
				iconColor='var(--green-2)'
				icon={<FaSchool />}
				titre={
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}>
						CPGE MPSI&nbsp;
						<HiArrowNarrowRight />
						&nbsp;MP*
					</div>
				}
				sousTitre='(Lycée Pasteur - Neuilly-Sur-Seine)'>
				<p>
					Classe préparatoire aux grandes écoles
					<br /> pendant 2 ans au Lycée Pasteur à Neuilly-Sur-Seine
				</p>
			</Element>
			<Element
				date='2018'
				iconBackground='var(--dark-gray)'
				icon={<FcDiploma2 />}
				titre='Bac S Euro Spé Maths - Mention Très Bien'
				link='https://www.facebook.com/lyceepdn'
				sousTitre='(Lycée Porte de Normandie - Verneuil-Sur-Avre)'
				image={
					<img
						src={LPDN}
						alt=""
						width="180px"
						height="44.6px"
						style={{ position: "absolute", top: "calc(50% - 22.3px)", left: "-270px" }}
					/>
				}>
				<p>
					Baccalauréat Scientifique Spécialité Mathématiques
					<br /> Mention Européenne obtenu avec Mention Très Bien
					<br /> au Lycée Porte de Normandie de Verneuil-Sur-Avre
				</p>
			</Element>
		</VerticalTimeline>
	);
}

export default Formation;
