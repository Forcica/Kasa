import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import Footer from "../layout/Footer/Footer";
import Main from "../layout/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import ApartmentPage from "../pages/ApartmentPage/ApartmentPage";
import About from "../pages/About/About";
import { ErrorPageNotFound } from "../pages/ErrorPageNotFound/ErrorPageNotFound";
import {loader as gridLoader} from "../components/ApartmentGrid/ApartmentGrid";

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

export const router = createBrowserRouter([
  {
    element: <HeaderFooterLayout />,
    errorElement: <ErrorPageNotFound />, 
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: gridLoader
      },
      {
        path: "/apartment/:id",
        element: <ApartmentPage />
      },
      {path:"/error",element:<ErrorPageNotFound/>},
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);
