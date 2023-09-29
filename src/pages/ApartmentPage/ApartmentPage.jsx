import { useState, useEffect } from "react";
import { DescriptionPanel } from "../../components/DescriptionPanel/DescriptionPanel";
import { ImageBanner } from "../../components/ImageBanner/ImageBanner";
import { ApartmentHeader } from "../../components/ApartmentHeader/ApartmentHeader";
import { useParams, redirect } from "react-router-dom";

// export function useApartment() {
//   const [apart, setApart] = useState(null);
//   const {id} = useParams();

//   useEffect(() => {
//     fetch("../db.json")
//       .then((res) => res.json())
//       .then((aparts) => {
//         const apart = aparts.find((apart) => apart.id === id);
//         if (apart === undefined) {
//           console.log("ErreurRedirect")
//           redirect("/");}; 
//         console.log(id)
//         setApart(apart);
//         console.log(apart)
//       })
//       .catch(console.error);
//   }, [id]);
//   return apart;
// }

function ApartmentPage() {
  const [apart, setApart] = useState(null);
  const {id} = useParams();
  
  useEffect(() => {
    fetch("../db.json")
    .then((res) => res.json())
    .then((aparts) => {
      const apart = aparts.find((apart) => apart.id === id);
      console.log(id)
        setApart(apart);
        console.log(apart)
      })
      .catch(console.error);
    }, [id]);
    
    console.log(apart)
    
    if (apart === null) {return <div>Loading...</div>};
    if (apart === undefined) {
      console.log("ErreurRedirect")
      return <div>Error...</div>;
      return redirect("/");
    }
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