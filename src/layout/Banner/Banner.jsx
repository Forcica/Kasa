import React from "react";

function Banner() {
	const bannerStyle = {
		backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Banner.png)`,
	};
	return (
		<div className="banner" style={bannerStyle}>
			<h2>Chez vous, partout et ailleurs</h2>
		</div>
	);
}

export default Banner;
