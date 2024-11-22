import React from "react";
import { BASE_PATH } from "../../config/config";

function Banner() {
	const bannerStyle = {
		backgroundImage: `url(${BASE_PATH}/assets/Banner.png)`,
	};
	return (
		<div className="banner" style={bannerStyle}>
			<h2>Chez vous, partout et ailleurs</h2>
		</div>
	);
}

export default Banner;
