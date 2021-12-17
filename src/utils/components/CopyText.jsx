import { useCallback } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function CopyText({ children, className = "", overrideText = undefined, copiedText, ...rest }) {
	const notify = useCallback(() => {
		toast.success(copiedText, {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			pauseOnFocusLoss: false,
			draggable: true,
			progress: undefined,
			theme: "dark",
			style: {
				fontSize: "calc(var(--page-font-size) * 0.7)",
			},
		});
	}, []);

	return (
		<span
			{...rest}
			className={`copy-text ${className}`}
			onClick={() => {
				navigator.clipboard.writeText(overrideText ? overrideText : children).catch(() => {});
				notify();
			}}>
			{children}
		</span>
	);
}

export default CopyText;
