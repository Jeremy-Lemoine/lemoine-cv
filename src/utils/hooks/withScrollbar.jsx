import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import mergeRefs from "../functions/mergeRefs";

function Track({ trackHeight, scrollTop, scrollTopMax, cappedHeight, contentRef, setManualScroll }) {
	const initialState = useMemo(() => ({ top: 0, y0: null, top0: null }), []);

	const [state, setState] = useState(initialState);

	useEffect(() => {
		setState((state) => ({
			...state,
			top: ((scrollTop / scrollTopMax) * (cappedHeight - trackHeight)) | 0,
		}));
	}, [scrollTop, scrollTopMax, cappedHeight, trackHeight]);

	const onMouseMove = useCallback(
		(e) => {
			e.preventDefault();
			setState(({ top, y0, top0 }) => {
				const newTop = (() => {
					const newTop = top0 + e.clientY - y0;
					if (newTop < 0) {
						return 0;
					} else if (newTop > cappedHeight - trackHeight + 2) {
						return cappedHeight - trackHeight + 2;
					} else {
						return newTop;
					}
				})();
				if (contentRef && contentRef.current)
					contentRef.current.scrollTo({
						top: (top * scrollTopMax) / (cappedHeight - trackHeight),
					});
				return { top: newTop, y0: y0, top0: top0 };
			});
		},
		[cappedHeight, trackHeight, contentRef, scrollTopMax]
	);

	const onMouseUp = useCallback(
		(_) => {
			setState((state) => ({ ...state, y0: initialState.y0 }));
			setManualScroll(false);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
		},
		[onMouseMove, initialState, setManualScroll]
	);

	const onMouseDown = useCallback(
		(e) => {
			e.preventDefault();
			setManualScroll(true);
			setState(({ top }) => ({ top: top, y0: e.clientY, top0: top }));
			window.addEventListener("mousemove", onMouseMove);
			window.addEventListener("mouseup", onMouseUp);
		},
		[onMouseMove, onMouseUp, setManualScroll]
	);

	return (
		<div
			className='track'
			style={{
				width: "100%",
				height: trackHeight && trackHeight !== Infinity ? trackHeight : 0,
				top: state.top,
			}}
			onMouseDown={onMouseDown}
		/>
	);
}

function Scrollbar({ totalHeight, cappedHeight, scrollTop, scrollTopMax, contentRef, setManualScroll }) {
	const [trackHeight, setTrackHeight] = useState(null);

	useEffect(() => {
		setTrackHeight((cappedHeight * cappedHeight) / totalHeight);
	}, [cappedHeight, totalHeight]);

	return (
		totalHeight - cappedHeight > 4 && (
			<div className='scrollbar'>
				<Track
					trackHeight={trackHeight}
					totalHeight={totalHeight}
					cappedHeight={cappedHeight}
					scrollTop={scrollTop}
					scrollTopMax={scrollTopMax}
					contentRef={contentRef}
					setManualScroll={setManualScroll}
				/>
			</div>
		)
	);
}

function ScrollbarComponent({ width, height, forRef, children }) {
	const [totalHeight, setTotalHeight] = useState(null);
	const [cappedHeight, setCappedHeight] = useState(null);
	const [scrollTop, setScrollTop] = useState(null);
	const [scrollTopMax, setScrollTopMax] = useState(null);
	const [manualScroll, setManualScroll] = useState(false);

	const contentRef = useRef();

	useEffect(() => {
		const scrollableElement = document.getElementById("scrollable");
		const functionToExecute = (e) => {
			setTimeout(() => {
				if (!manualScroll) {
					if (e.target.scrollTopMax) {
						// FOR FIREFOX
						setScrollTop(e.target.scrollTop);
						setScrollTopMax(e.target.scrollTopMax);
					} else {
						// FOR OTHER NAVIGATORS
						setScrollTop(e.target.scrollTop);
						setScrollTopMax(e.target.scrollHeight - e.target.clientHeight);
					}
				}
			}, 10);
		};
		functionToExecute({target: contentRef.current});
		scrollableElement.addEventListener("scroll", functionToExecute);
		return () => scrollableElement.removeEventListener("scroll", functionToExecute);
	});

	return (
		<div className='scrollable'>
			<div
				style={{ width: width, height: height, overflowY: "auto", scrollbarWidth: "none" }}
				id='scrollable'
				ref={mergeRefs(
					(node) =>
						node &&
						setTimeout(() => {
							node.clientHeight && setCappedHeight(node.clientHeight);
							node.scrollHeight && setTotalHeight(node.scrollHeight);
							node.scrollTop && setScrollTop(node.scrollTop);
							node.scrollTopMax && setScrollTopMax(node.scrollTopMax);
						}, 2),
					contentRef,
					forRef
				)}>
				{children}
			</div>

			<Scrollbar
				totalHeight={totalHeight}
				cappedHeight={cappedHeight}
				scrollTop={scrollTop}
				scrollTopMax={scrollTopMax}
				contentRef={contentRef}
				setManualScroll={setManualScroll}
			/>
		</div>
	);
}

export default ScrollbarComponent;
