import React, { useState } from "react";

export function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false); // Gère l'état de visibilité du contenu

  const showContent = () => {
    setIsContentVisible(!isContentVisible); // Bascule l'état de visibilité du contenu
  };

  // Définit les classes CSS en fonction de l'état de visibilité
  const contentClass = `${isContentVisible ? 'visible' : 'hidden'} description__content`;
  const chevronClass = `${isContentVisible ? 'fa-chevron-up' : 'fa-chevron-down'} fas`;

  return (
    <div className="description__panel">
      <p className="description__header" onClick={showContent}>
        <span>{props.title}</span> {/* Affiche le titre */}
        <i className={chevronClass}></i> {/* Icône chevron indiquant l'état d'ouverture/fermeture */}
      </p>
      <div className={contentClass}>
        {props.content} {/* Affiche le contenu, sa visibilité est contrôlée par `contentClass` */}
      </div>
    </div>
  );
}
