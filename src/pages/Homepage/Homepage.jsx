import React from "react";
import Banner from "../../layout/Banner/Banner";
import ApartmentGrid from "../../components/ApartmentGrid/ApartmentGrid.jsx";

function HomePage() {
  return (
    <>
      <Banner /> {/* Affiche le composant Banner*/}
      <ApartmentGrid /> {/* Affiche le composant ApartmentGrid qui liste les appartements disponibles */}
    </>
  );
}

export default HomePage;
