import React from "react";

export function ApartmentHeader({ apart }) {
  // Extraction du prénom et du nom de l'hôte depuis les propriétés de l'appartement
  const { name } = apart.host;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="apartment__header">
      {/* Conteneur principal pour l'en-tête de l'appartement */}
      <div className="apartment__title">
        {/* Titre et localisation de l'appartement */}
        <h1>{apart.title}</h1> {/* Titre de l'appartement */}
        <h2>{apart.location}</h2> {/* Localisation de l'appartement */}
        <div className="apartment__tags">
          {/* Tags ou caractéristiques de l'appartement */}
          {apart.tags.map((tag) => (
            <span key={tag}>{tag}</span> /* Affiche chaque tag */
          ))}
        </div>
      </div>
      <div className="apartment__owner">
        {/* Informations sur le propriétaire */}
        <div className="apartment__owner__details">
          <h3>
            {/* Prénom et nom du propriétaire */}
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="apartment__owner__badge">
            {/* Badge du propriétaire avec sa photo */}
            <img src={apart.host.picture} alt="" /> {/* Photo du propriétaire */}
          </div>
        </div>
        <div className="apartment__owner__stars">
          {/* Crée un système de notation visuel en étoiles pour représenter la note de l'appartement */}
          {[1, 2, 3, 4, 5].map((num) => (
            /* 
              Itère sur un tableau de nombres de 1 à 5. Chaque nombre représente une étoile.
              Pour chaque étoile (num), cette partie du code détermine si l'étoile doit être
              affichée comme active ('on') ou non, basé sur la note de l'appartement.
            */
            <span key={num} className={apart.rating >= num ? "on" : ""}>
                {/* Affiche une étoile. La classe 'on' est appliquée si la note de l'appartement (apart.rating) est supérieure ou égale au nombre représentant l'étoile (num).
                Ainsi, pour une note de 3, les trois premières étoiles auront la classe 'on', et les deux dernières n'en auront pas, reflétant visuellement une note de 3/5. */}
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
