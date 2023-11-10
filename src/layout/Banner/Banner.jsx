import React from "react";

function Banner() {
  // Ce composant Banner sert à afficher une bannière
  return (
    <div className="banner">
      {/* Conteneur de la bannière avec la classe 'banner' pour le style */}
      <h2>Chez vous, partout et ailleurs</h2> {/* Texte de la bannière */}
    </div>
  );
}

export default Banner; // Exporte le composant pour une utilisation dans d'autres parties de l'application
