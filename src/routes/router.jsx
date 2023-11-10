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
        <Outlet /> {/* Point d'insertion pour les composants de la page en fonction de la route */}
      </Main>
      <Footer /> {/* Composant Footer pour le pied de page */}
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />, // Applique le layout avec Navbar et Footer à toutes les routes
    errorElement: <ErrorPageNotFound />, // Élément à afficher en cas d'erreur de route
    children: [
      {
        path: "/", // Route pour la page d'accueil
        element: <HomePage />,
        loader: gridLoader // Chargeur de données pour la page d'accueil
      },
      {
        path: "/:id", // Route pour les pages d'appartements individuels
        element: <ApartmentPage />
      },
      {
        path: "/error", // Route pour la page d'erreur
        element: <ErrorPageNotFound />
      },
      {
        path: "/about", // Route pour la page À propos
        element: <About />
      }
    ]
  }
]);
