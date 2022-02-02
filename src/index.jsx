import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useLocation } from "react-router";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import "./styles/style.scss";
import MainPage from "./pages/mainPage";
import PageNotFound from "./pages/pageNotFound";
import { WrapFondu } from "./utils/functions/appTemplates";
import updateCSS from "./styles/responsive";
import "./languages/i18n";

function Page() {
	const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

	const location = useLocation();

	useEffect(() => {
		if (isPortrait) {
			updateCSS("portrait");
		} else {
			updateCSS("paysage");
		}
	}, [isPortrait]);

	const getPagesRoutes = () => {
		return [
			{
				name: "main",
				path: "/",
				app: <MainPage />,
			},
			{
				name: "pageNotFound",
				path: "/pageNotFound",
				app: <PageNotFound />,
			},
		].map(({ name, path, app }) => {
			return (
				<Route
					exact
					key={name}
					path={path}
					element={
						<div className='page'>
							<WrapFondu app={<div className='app-container'>{app}</div>} />
						</div>
					}
				/>
			);
		});
	};

	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				{getPagesRoutes()}
				<Route path='*' element={<Navigate to='/pageNotFound' state />} />
			</Routes>
		</AnimatePresence>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(
	<BrowserRouter>
		<Page />
	</BrowserRouter>,
	rootElement
);

/* 

TODO: Translations
	--> Make translations for each text group in the app.

TODO: Responsive
	--> Adjust the app for smartphones.

*/