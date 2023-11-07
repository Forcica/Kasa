import React from "react";
import { Link } from "react-router-dom";

function ApartmentCard(props) {
  return (
    // <Link
    //   to={`/apartment/${props.id}`}
    // >
    <Link to={`/${props.id}`}>
      <div className="apartment">
        <img src={props.imageUrl} alt={props.title} />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default ApartmentCard;