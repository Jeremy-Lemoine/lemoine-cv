import { useCallback } from "react";
import { useNavigate } from "react-router";
import { MdNotInterested } from "react-icons/md";
import { useTranslation } from "react-i18next";

function PageNotFound() {
	const navigate = useNavigate();

	const { t } = useTranslation();

	const handleClick = useCallback(() => {
		navigate("/");
	}, [navigate]);

	return (
		<div style={{height: '100vh', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
			<MdNotInterested style={{ fontSize: "150px", color: "var(--saumon)" }} />
			<p>
				{t("not_found_page_message_before")}
				<button type='button' onClick={handleClick} className='link'>
					{t("home_page_name")}
				</button>
				{t("not_found_page_message_after")}
			</p>
		</div>
	);
}

export default PageNotFound;
