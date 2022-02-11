import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { send } from "emailjs-com";

import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import ModalContact from "./ModalContact";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { modal_mult } from "../../../styles/responsive";

export default function MeContacter({ isOpen, setIsOpen }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const { t } = useTranslation();

	const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

	const mult_responsive = modal_mult(isPortrait);

	const {
		champ_obligatoire: required,
		sending,
		sent,
		error,
		envoyer,
		common: { nom, mail, message },
		contact: { modal_header },
	} = t("contact", { returnObjects: true });

	/*
	 0 - Initial
	 1 - Loading (sending the mail)
	 2 - Success
	-1 - Error
	*/
	const [step, setStep] = useState(0);

	const { width: winWidth } = useWindowDimensions();

	const submit = useCallback((data) => {
		setStep(1);
		// Maybe put constants in .env file
		send(
			"service_vll6ms8",
			"template_4i4v4tc",
			{ ...data, message: data.message.replace(/\n/g, " [\n] ") },
			"user_bWOvJmKNGyBen5qbMmJm8"
		)
			.then(() => setStep(2))
			.catch(() => setStep(-1));
	}, []);

	return (
		<ModalContact
			isOpen={isOpen}
			setIsOpen={setIsOpen}
			onClose={() => {
				setStep(0);
				reset();
			}}>
			{step === 0 ? (
				<form onSubmit={handleSubmit(submit)} className='formulaire'>
					<h3>{modal_header}</h3>

					<div className='corps'>
						<label>{nom}*</label>
						<input
							{...register("from_name", { required: required })}
							placeholder={nom}
							className={errors.from_name && "invalid"}
						/>
						<span className='error'>{errors.from_name && errors.from_name.message}</span>

						<label>{mail.title}*</label>
						<input
							{...register("from_email", {
								pattern: {
									value: /^[A-Za-z0-9]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,4}$/i,
									message: mail.pattern_error,
								},
								required: required,
							})}
							placeholder={mail.title}
							className={errors.from_email && "invalid"}
						/>
						<span className='error'>{errors.from_email && errors.from_email.message}</span>

						<label>{message}*</label>
						<textarea
							{...register("message", { required: required })}
							placeholder={message}
							className={errors.message && "invalid"}
							rows={5}
							style={{ width: winWidth * mult_responsive }}
						/>
						<span className='error'>{errors.message && errors.message.message}</span>
					</div>

					<input type='submit' value={envoyer} className='submit' />
				</form>
			) : step === 1 ? (
				<h3 style={{ padding: "50px" }}>{sending}</h3>
			) : step === 2 ? (
				<h3 style={{ padding: "50px" }}>{sent}</h3>
			) : (
				<h3 style={{ padding: "50px" }}>{error}</h3>
			)}
		</ModalContact>
	);
}
