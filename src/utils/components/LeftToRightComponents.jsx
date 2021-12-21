import React from "react";
import { useMemo } from "react";
import { useCallback, useState } from "react";
import { useEffect } from "react";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const DIRECTION = {
	VERS_GAUCHE: -1,
	VERS_DROITE: 1,
};

const LeftToRightComponents = ({
	children,
	durationInMs = 500,
	translationPercentOfScreen = 30,
	updateSelectedOnParent,
	...rest
}) => {
	const [selected, setSelected] = useState(0);

	const childrenArray = useMemo(() => React.Children.toArray(children), [children]);
	const [currentChild, setCurrentChild] = useState(childrenArray[selected]);
	const [direction, setDirection] = useState(null);
	const [etape, setEtape] = useState(2);
	const [hasInitialized, doInitialize] = useState(false);

	const max = useMemo(() => React.Children.count(children) - 1, [children]);

	const next = useCallback(() => {
		!hasInitialized && doInitialize(true);
		setDirection((_) => DIRECTION.VERS_DROITE);
		setSelected((selected) => (selected < max ? selected + 1 : selected));
	}, [max, hasInitialized]);

	const previous = useCallback(() => {
		!hasInitialized && doInitialize(true);
		setDirection((_) => DIRECTION.VERS_GAUCHE);
		setSelected((selected) => (selected > 0 ? selected - 1 : selected));
	}, [hasInitialized]);

	useEffect(() => {
		if (updateSelectedOnParent) {
			updateSelectedOnParent([selected, max].map((i) => i + 1));
		}
	}, [selected, max, updateSelectedOnParent]);

	useEffect(() => {
		if (hasInitialized) {
			setEtape(1);
			setTimeout(() => {
				setEtape(1.5);
				setCurrentChild(childrenArray[selected]);
				setTimeout(() => setEtape(2), 10);
			}, durationInMs);
		}
	}, [selected, childrenArray, durationInMs, hasInitialized]);

	const isFirst = useCallback(() => {
		return selected === 0;
	}, [selected]);

	const isLast = useCallback(() => {
		return selected === max;
	}, [selected, max]);

	const getTranslation = useCallback(() => {
		return etape === 2
			? "0"
			: direction === DIRECTION.VERS_DROITE
			? etape !== 1.5
				? `-${translationPercentOfScreen}vw`
				: `${translationPercentOfScreen}vw`
			: etape !== 1.5
			? `${translationPercentOfScreen}vw`
			: `-${translationPercentOfScreen}vw`;
	}, [etape, direction, translationPercentOfScreen]);

	const getOpacity = useCallback(() => {
		return etape !== 2 ? 0 : 1;
	}, [etape]);

	useEffect(() => {
		window.addEventListener("keydown", (e) => {
			e.key === "ArrowRight" && next();
			e.key === "ArrowLeft" && previous();
		});
	}, [next, previous]);

	return (
		<>
			<div style={{ display: "flex", alignItems: "stretch", flexDirection: "row" }}>
				<span
					onClick={() => !isFirst() && previous()}
					className={`left-to-right-side-button${isFirst() ? " disabled" : ""}`}>
					<IoChevronBack />
				</span>
				<div
					style={{
						transition:
							etape !== 1.5
								? `transform ${durationInMs}ms ease-out, opacity ${durationInMs}ms ease-out`
								: `opacity ${durationInMs}ms ease-out`,
						transform: `translateX(${getTranslation()})`,
						opacity: getOpacity(),
						justifyContent: "center",
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						...rest,
					}}
					children={currentChild}
				/>
				<span
					onClick={() => !isLast() && next()}
					className={`left-to-right-side-button${isLast() ? " disabled" : ""}`}>
					<IoChevronForward />
				</span>
			</div>
		</>
	);
};

export default LeftToRightComponents;
