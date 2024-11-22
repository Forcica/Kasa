import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import Footer from "../layout/Footer/Footer";
import Main from "../layout/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import ApartmentPage from "../pages/ApartmentPage/ApartmentPage";
import About from "../pages/About/About";
import { ErrorPageNotFound } from "../pages/ErrorPageNotFound/ErrorPageNotFound";
import { loader as gridLoader } from "../components/ApartmentGrid/ApartmentGrid";
import { BASE_PATH } from "../config/config";

const HeaderFooterLayout = () => {
	return (
		<>
			<Navbar /> {/* Composant Navbar pour la navigation */}
			<Main>
				<Outlet />{" "}
				{/* Point d'insertion pour les composants de la page en fonction de la route */}
			</Main>
			<Footer /> {/* Composant Footer pour le pied de page */}
		</>
	);
};

export const router = createBrowserRouter(
	[
		{
			element: <HeaderFooterLayout />,
			errorElement: <ErrorPageNotFound />,
			children: [
				{
					path: "/",
					element: <HomePage />,
					loader: gridLoader,
				},
				{
					path: "/:id",
					element: <ApartmentPage />,
				},
				{
					path: "/error",
					element: <ErrorPageNotFound />,
				},
				{
					path: "/about",
					element: <About />,
				},
			],
		},
	],
	{
		basename: BASE_PATH,
	}
);
