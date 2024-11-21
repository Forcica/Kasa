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
					path: "/Kasa/",
					element: <HomePage />,
					loader: gridLoader,
				},
				{
					path: "/Kasa/:id",
					element: <ApartmentPage />,
				},
				{
					path: "/Kasa/error",
					element: <ErrorPageNotFound />,
				},
				{
					path: "/Kasa/about",
					element: <About />,
				},
			],
		},
	],
	{
		basename: "/Kasa",
	}
);
