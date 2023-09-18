import ApartmentCard from "./ApartmentCard.jsx";
import { useLoaderData } from "react-router-dom";
import React, { useEffect, useState } from "react";

export async function loader() {
  const response = await fetch("db.json");
  const apartments = await response.json();
  return  {apartments} ;
} 

function ApartmentGrid() {
  const {apartments} = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (apartments.length > 0) {
      setLoading(false);
    }
  }, [apartments]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <ApartmentCard
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id}
        />
      ))}
    </div>
  );
}

export default ApartmentGrid;