import React, { useState } from "react";

export function ImageBanner(props) {
  const pictures = props.pictures; // Récupère l'array 'pictures' depuis les props
  const [currentPicture, setCurrentPicture] = useState(0); // Gestion de l'état de l'image actuelle

  const getClassName = (i) => {
    if (i === currentPicture) return "show"; // Si l'index 'i' est égal à l'index de l'image actuelle, retourne 'show'
    return ""; // Sinon, retourne une chaîne vide
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length); // Incrémente 'currentPicture', boucle à 0 à la fin de l'array
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1); // Si on est au début, passe à la dernière image
      return;
    }
    setCurrentPicture(newCurrentPicture); // Décrémente 'currentPicture'
  };

  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0; // Vérifie si 'pictures' existe et n'est pas vide
  };

  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return <img src="./assets/bannerAbout.png" className="show banner_about" alt="" />; // Si pas d'images, montre une image par défaut
    }
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img> // Crée un carrousel d'images
    ));
  };

  const showButtonsAndCounter = arePicturesAvailable() && pictures.length > 1; // Détermine si les boutons et le compteur sont affichés (seulement si plus d'une image)

  return (
    <div className="image__banner">
      <div
        id={!arePicturesAvailable() ? 'image__container--about' : ''}
        className="image__container"
      >
        {getCarouselOrDefaultImage()} {/* Affiche le carrousel ou l'image par défaut */}
      </div>
      {showButtonsAndCounter && (
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i> {/* /* Bouton pour aller à l'image précédente */ }
          </button>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length} {/* /* Compteur de slides */}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i> {/* Bouton pour aller à l'image suivante */}
          </button>
        </>
      )}
    </div>
  );
}
