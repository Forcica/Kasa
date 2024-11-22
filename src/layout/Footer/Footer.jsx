import React from "react";
import { getAssetPath } from "../../config/config";

function Footer() {
	return (
		<div className="footer__container">
			<div className="footer">
				<div>
					<img
						src={getAssetPath("assets/logo-black.png")}
						alt="logo"
						width="100"
					/>
				</div>
				<div>© 2020 Kasa. All rights reserved</div>
			</div>
		</div>
	);
}

export default Footer;
