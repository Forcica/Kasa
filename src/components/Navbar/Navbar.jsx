import React from "react";
import { NavLink } from "react-router-dom";
import { BASE_PATH } from "../../config/config";

function Navbar() {
	return (
		<nav className="navbar">
			<NavLink to={BASE_PATH}>
				<div className="navbar__logo">
					<img src={`${BASE_PATH}/assets/logo.png`} alt="Logo" />
				</div>
			</NavLink>
			<NavLink to={BASE_PATH}>
				<div>Accueil</div>
			</NavLink>
			<NavLink to={`${BASE_PATH}/about`}>
				<div>A propos</div>
			</NavLink>
		</nav>
	);
}

export default Navbar;
