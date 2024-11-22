import React from "react";
import { createHashRouter, Outlet } from "react-router-dom";
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
			<Navbar />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
};

export const router = createHashRouter(
	[
		{
			path: "/",
			element: <HeaderFooterLayout />,
			errorElement: <ErrorPageNotFound />,
			children: [
				{
					index: true,
					element: <HomePage />,
					loader: gridLoader,
				},
				{
					path: "apartment/:id",
					element: <ApartmentPage />,
				},
				{
					path: "about",
					element: <About />,
				},
				{
					path: "*",
					element: <ErrorPageNotFound />,
				},
			],
		},
	],
	{
		basename: BASE_PATH,
	}
);
