import ApartmentCard from "./../ApartmentCard/ApartmentCard";
import { useLoaderData } from "react-router-dom";
import React, { useEffect, useState } from "react";

export async function loader() {
	// La fonction 'loader' charge les données des appartements depuis 'db.json'
	const response = await fetch(
		process.env.NODE_ENV === "production" ? "/Kasa/db.json" : "/db.json"
	);
	const apartments = await response.json();
	return { apartments }; // Renvoie les données des appartements pour qu'elles soient utilisées dans le composant
}

function ApartmentGrid() {
	const { apartments } = useLoaderData(); // Utilise les données chargées par 'loader'
	const [loading, setLoading] = useState(true); // État pour gérer l'affichage du chargement

	useEffect(() => {
		// Effet pour vérifier si les données des appartements sont chargées
		if (apartments.length > 0) {
			setLoading(false); // Arrête l'affichage du chargement si les données sont chargées
		}
	}, [apartments]); // Les appartements sont une dépendance de cet effet

	if (loading) {
		return <h1>Loading...</h1>; // Affiche un message de chargement si les données ne sont pas encore chargées
	}

	return (
		<div className="grid">
			{/* Affiche une grille d'appartements */}
			{apartments.map((apartment) => (
				// Crée une carte pour chaque appartement en utilisant les données chargées
				<ApartmentCard
					title={apartment.title}
					imageUrl={apartment.cover}
					id={apartment.id}
					key={apartment.id}
				/>
			))}
		</div>
	);
}

export default ApartmentGrid; // Exporte le composant pour l'utiliser ailleurs
