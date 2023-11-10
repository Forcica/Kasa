import React from "react";

function Footer() {
  // Ce composant Footer représente le pied de page du site web
  return (
    <div className="footer__container">
      {/* Conteneur principal du footer */}
      <div className="footer">
        {/* Contenu du footer */}
        <div>
          {/* Section pour le logo */}
          <img src="./assets/logo-black.png" alt="logo" width="100" /> {/* Logo de l'entreprise ou de l'application */}
        </div>
        <div>© 2020 Kasa. All rights reserved</div> {/* Message de droits d'auteur */}
      </div>
    </div>
  );
}

export default Footer; // Exporte le composant pour une utilisation dans d'autres parties de l'application
