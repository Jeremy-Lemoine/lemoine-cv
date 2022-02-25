import { useTranslation } from "react-i18next";

export default function MobileComingSoon() {
	const { t } = useTranslation();

	return (
		<div className='mobile-coming-soon'>
			<span>{t("mobile_coming_soon")}</span>
		</div>
	);
}
