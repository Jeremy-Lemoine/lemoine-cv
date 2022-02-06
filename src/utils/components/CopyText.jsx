import { useCallback } from "react";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

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
	}, [copiedText]);

	return (
		<span
			{...rest}
			className={`copy-text ${className}`}
			onClick={() => {
				if (navigator.clipboard && navigator.clipboard.writeText)
					navigator.clipboard.writeText(overrideText ? overrideText : children).catch(() => {});
				else
					copy(overrideText ? overrideText : children);
				notify();
			}}>
			{children}
		</span>
	);
}

export default CopyText;
