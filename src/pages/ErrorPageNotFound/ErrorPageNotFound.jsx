import React from "react";
import { Link } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Footer from "../../layout/Footer/Footer";
import { BASE_PATH } from "../../config/config";

export function ErrorPageNotFound() {
	return (
		<>
			<Main>
				{/* Bloc principal de la page d'erreur */}
				<div className="error-page">
					<h1>404</h1> {/* Titre indiquant le code d'erreur '404' */}
					<h2>Oups! La page que vous demandez n'existe pas</h2>{" "}
					{/* Message d'erreur */}
					<Link to={BASE_PATH}>Retourner sur la page d'accueil</Link>{" "}
					{/* Lien pour revenir à la page d'accueil */}
				</div>
			</Main>
			<Footer /> {/* Composant Footer affiché en bas de page */}
		</>
	);
}
