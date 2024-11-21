import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar">
			<NavLink to="/Kasa">
				<div className="navbar__logo">
					<img src="/Kasa/assets/logo.png" alt="Logo" />
				</div>
			</NavLink>
			<NavLink to="/Kasa">
				<div>Accueil</div>
			</NavLink>
			<NavLink to="/Kasa/about">
				<div>A propos</div>
			</NavLink>
		</nav>
	);
}

export default Navbar;
