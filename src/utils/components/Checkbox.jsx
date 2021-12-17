import { useCallback, useState } from "react";
import { motion } from "framer-motion";

const sizeRatioBetweenCheckedAndNot = 12;

function CheckBox({ sizeInPx = 50, onChange, initial = false, strokeWidthInPx = 3 }) {
	const [isChecked, setIsChecked] = useState(initial);
	const handleChange = onChange || ((_) => {});

	const getCheckmarkPoints = useCallback(() => {
		const center = sizeInPx / 2.05;
		const x1 = center - sizeInPx / 5;
		const y1 = center - sizeInPx / 50;
		const x2 = center - sizeInPx / 25;
		const y2 = center + sizeInPx / 7.2;
		const x3 = center + sizeInPx / 4.5;
		const y3 = center - sizeInPx / 8.3;
		return [x1, y1, x2, y2, x3, y3].join(" ");
	}, [sizeInPx]);

	const getForm = useCallback(() => {
		return {
			rx: isChecked ? sizeInPx / 2 : sizeInPx / 15,
			x: isChecked ? strokeWidthInPx + 1 + sizeInPx / sizeRatioBetweenCheckedAndNot : strokeWidthInPx + 1,
			y: isChecked ? strokeWidthInPx + 1 + sizeInPx / sizeRatioBetweenCheckedAndNot : strokeWidthInPx + 1,
			width: isChecked
				? sizeInPx - 2 * (strokeWidthInPx + 1 + sizeInPx / sizeRatioBetweenCheckedAndNot)
				: sizeInPx - 2 * strokeWidthInPx - 2,
			height: isChecked
				? sizeInPx - 2 * (strokeWidthInPx + 1 + sizeInPx / sizeRatioBetweenCheckedAndNot)
				: sizeInPx - 2 * strokeWidthInPx - 2,
		};
	}, [sizeInPx, isChecked, strokeWidthInPx]);

	return (
		<motion.svg width={sizeInPx} height={sizeInPx}>
			<motion.rect // becomes a circle when clicked on (rx in getForm() is the radius of the circle)
				className={`checkbox${isChecked ? " checked" : ""}`}
				initial={{ pathLength: 0, opacity: 0, ...getForm() }}
				animate={{ pathLength: 1, opacity: 1, ...getForm() }}
				transition={{ duration: 0.5, delay: isChecked ? 0.5 : 0, pathLength: {duration: 2} }}
				onClick={() => {
					setIsChecked((isChecked) => !isChecked);
					handleChange(!isChecked);
				}}
			/>
			<motion.polyline
				points={getCheckmarkPoints()}
				fill='none'
				initial={{ pathLength: 0, opacity: 0 }}
				animate={isChecked ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
				transition={{ duration: 0.5, delay: isChecked ? 0 : 0.5 }}
				stroke='var(--orange-2)'
				strokeWidth={`${strokeWidthInPx}px`}
				strokeLinecap='round'
				cursor='pointer'
				onClick={() => {
					setIsChecked((isChecked) => !isChecked);
					handleChange(!isChecked);
				}}
			/>
		</motion.svg>
	);
}

export default CheckBox;
