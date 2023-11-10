import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DescriptionPanel } from "../../components/DescriptionPanel/DescriptionPanel";
import { ImageBanner } from "../../components/ImageBanner/ImageBanner";
import { ApartmentHeader } from "../../components/ApartmentHeader/ApartmentHeader";

function ApartmentPage() {
  const [apart, setApart] = useState(null); // Gestion de l'état pour stocker les détails de l'appartement
  const { id } = useParams(); // Récupération de l'identifiant de l'appartement depuis l'URL
  // const navigate = useNavigate(); // Hook pour la navigation

  useEffect(() => {
    // Charge les données de l'appartement au montage du composant
    fetch("../db.json")
      .then((res) => res.json())
      .then((aparts) => {
        const foundApart = aparts.find((a) => a.id === id); // Trouve l'appartement correspondant à l'ID
        if (foundApart === undefined) {
          // navigate("/error"); // Redirige vers la page d'erreur si l'appartement n'est pas trouvé
          return;
        }
        setApart(foundApart); // Met à jour l'état avec les détails de l'appartement trouvé
      })
      .catch(console.error); // Gère les erreurs de chargement des données
  }, [id]); // Dépendances du useEffect

  if (!apart) {
    return <div>Loading...</div>; // Affiche un message de chargement tant que les données ne sont pas chargées
  }

  return (
    <div className="apartment-page">
      <ImageBanner pictures={apart.pictures} /> {/* Affiche un carrousel d'images de l'appartement */}
      <ApartmentHeader apart={apart} /> {/* En-tête avec les détails de l'appartement */}
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={apart.description} /> {/* Panneau de description de l'appartement */}
        <DescriptionPanel
          title="Equipements"
          content={
            <ul>
              {apart.equipments.map((eq, i) => (
                <li key={i}>{eq}</li> // Liste des équipements de l'appartement
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
