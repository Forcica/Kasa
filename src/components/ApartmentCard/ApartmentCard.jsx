import React from "react";
import { Link } from "react-router-dom";
import { BASE_PATH } from "../../config/config";

function ApartmentCard(props) {
	return (
		<Link to={`${BASE_PATH}/apartment/${props.id}`}>
			<div className="apartment">
				<img src={props.imageUrl} alt={props.title} />
				<div className="apartment__subtitle">{props.title}</div>
			</div>
		</Link>
	);
}

export default ApartmentCard;
