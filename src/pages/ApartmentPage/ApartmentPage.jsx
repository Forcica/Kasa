import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DescriptionPanel } from "../../components/DescriptionPanel/DescriptionPanel";
import { ImageBanner } from "../../components/ImageBanner/ImageBanner";
import { ApartmentHeader } from "../../components/ApartmentHeader/ApartmentHeader";

function ApartmentPage() {
  const [apart, setApart] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("../db.json")
      .then((res) => res.json())
      .then((aparts) => {
        const foundApart = aparts.find((a) => a.id === id);
        if (foundApart === undefined) {
          navigate("/error");
          return;
        }
        setApart(foundApart);
      })
      .catch(console.error);
  }, [id, navigate]);

  if (!apart) {
    return <div>Loading...</div>;
  }

  return (
    <div className="apartment-page">
      <ImageBanner pictures={apart.pictures} />
      <ApartmentHeader apart={apart} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={apart.description} />
        <DescriptionPanel
          title="Equipements"
          content={
            <ul>
              {apart.equipments.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
