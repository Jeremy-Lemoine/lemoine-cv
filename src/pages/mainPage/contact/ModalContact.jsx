import Modal from "react-modal";
import { MdOutlineClose } from "react-icons/md";

const customStyles = {
	overlay: {
		// PAGE BEHIND THE MODAL
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
	content: {
		backgroundColor: "var(--dark-gray)",
		border: "5px solid var(--orange-2)",
		borderRadius: "15px",
		boxShadow: "0 0 20px 3px black",
		// CENTERED CONTENT
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

Modal.setAppElement("#root");

export default function ModalContact({ isOpen, setIsOpen, onClose, children }) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={() => {
				setIsOpen((_) => false);
				onClose && onClose();
			}}
			style={customStyles}>
			<MdOutlineClose
				className='modal-quit-button'
				onClick={() => {
					setIsOpen((_) => false);
					onClose && onClose();
				}}
			/>
			{children}
		</Modal>
	);
}
