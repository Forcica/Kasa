import React from "react";
import { Link } from "react-router-dom";

function ApartmentCard(props) {
	// Ce composant ApartmentCard représente une carte individuelle pour un appartement
	return (
		// Utilise le composant Link de react-router-dom pour naviguer vers la page de l'appartement
		<Link to={`/${props.id}`}>
			{/* Conteneur de la carte d'appartement */}
			<div className="apartment">
				{/* Image de l'appartement */}
				<img src={props.imageUrl} alt={props.title} />{" "}
				{/* Affiche l'image avec l'URL et le titre fournis en props */}
				{/* Sous-titre (titre de l'appartement) */}
				<div className="apartment__subtitle">{props.title}</div>{" "}
				{/* Affiche le titre de l'appartement */}
			</div>
		</Link>
	);
}

export default ApartmentCard; // Exporte le composant pour une utilisation dans d'autres parties de l'application
