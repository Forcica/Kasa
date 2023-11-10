import React from "react";

function Main({ children }) {
  // Ce composant Main sert de conteneur principal pour le contenu de la page
  return <div className="main">{children}</div>; // Rend un élément 'div' avec la classe 'main', contenant les 'children'
  // 'children' représente tout contenu enfant passé à ce composant Main
}

export default Main; // Exporte le compos
