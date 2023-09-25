import React from "react";

export function ApartmentHeader({ apart }) {
  const { name } = apart.host;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="apartment__header">
      <div className="apartment__title">
        <h1>{apart.title}</h1>
        <h2>{apart.location}</h2>
        <div className="apartment__tags">
          {apart.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="apartment__owner">
        <div className="apartment__owner__details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="apartment__owner__badge">
            <img src={apart.host.picture} alt="" />
          </div>
        </div>
        <div className="apartment__owner__stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={apart.rating >= num ? "on" : ""}>
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}