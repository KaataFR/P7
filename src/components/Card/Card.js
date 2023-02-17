import React from "react";
import "./Card.css";

function Card({ id, image, titre }) {
  return (
    <div className="Card" id={id}>
      <img className="Card-image" src={image} alt="Card" />
      <div className="Card-sombre"></div>
      <span className="Card-titre">{titre}</span>
    </div>
  );
}

export default Card;
