import { useCallback } from "react";
import { IoSchoolSharp } from "react-icons/io5";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaSchool } from "react-icons/fa";
import { FcDiploma2 } from "react-icons/fc";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import replace from "react-string-replace";
import "react-vertical-timeline-component/style.min.css";

import { imta, LPDN } from "../../../images";
import { espace } from "../../../utils/others/shortcuts";
import { useTranslation } from "react-i18next";

function Formation() {
	const { t } = useTranslation();

	const { imt, prepa, lycee } = t("formation_page", { returnObjects: true });

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
						<>
							<a href={link} style={{ textDecoration: "none", display: "inline-block" }}>
								<h3 style={{ marginBottom: 0 }}>
									<button className='link' style={{ color: "var(--orange-2)" }}>
										{titre}
									</button>
								</h3>
							</a>
							<br />
						</>
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
				date={imt.date}
				iconBackground='var(--dark-gray)'
				iconColor='#afcb37'
				icon={<IoSchoolSharp />}
				titre='IMT Atlantique'
				link={imt.link}
				sousTitre={`${imt.lieu}`}
				image={
					<img
						src={imta}
						alt=''
						width='308px'
						height='auto'
						style={{ position: "absolute", top: "calc(50% - 100px)", left: "-320px" }}
					/>
				}>
				<p>{replace(imt.description.join("\n"), "\n", () => <br />)}</p>
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
						CPGE MPSI{espace}
						<HiArrowNarrowRight />
						{espace}MP*
					</div>
				}
				sousTitre={`(Lycée Pasteur - ${prepa.lieu})`}>
				<p>{replace(prepa.description.join("\n"), "\n", () => <br />)}</p>
			</Element>
			<Element
				date='2018'
				iconBackground='var(--dark-gray)'
				icon={<FcDiploma2 />}
				titre={replace(lycee.titre, "\n", () => <br />)}
				link='https://www.facebook.com/lyceepdn'
				sousTitre={`(Lycée Porte de Normandie - ${lycee.lieu})`}
				image={
					<img
						src={LPDN}
						alt=''
						width='180px'
						height='auto'
						style={{ position: "absolute", top: "calc(50% - 22.3px)", left: "-270px" }}
					/>
				}>
				<p>{replace(lycee.description.join("\n"), "\n", () => <br />)}</p>
			</Element>
		</VerticalTimeline>
	);
}

export default Formation;
