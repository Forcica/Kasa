import { useState, useEffect } from "react";
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./ApartmentPage.scss";
import { ImageBanner } from "../components/ImageBanner";
import { ApartmentHeader } from "../components/ApartmentHeader";
import { useLocation } from "react-router-dom";

export function useApartment() {
  const [apart, setApart] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((aparts) => {
        const apart = aparts.find((apart) => apart.id === location.state.apartmentId);
        setApart(apart);
      })
      .catch(console.error);
  }, [location.state.apartmentId]);
  return apart;
}

function ApartmentPage() {
  const apart = useApartment();

  if (apart == null) return <div>Loading...</div>;
  return (
    <div className="apartment-page">
      <ImageBanner pictures={apart.pictures} />
      <ApartmentHeader apart={apart} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={apart.description} />
        <DescriptionPanel
          title="Equipements"
          content={apart.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;