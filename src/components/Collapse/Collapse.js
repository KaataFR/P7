import React, { useState } from "react";
import "./Collapse.css";
import fleche from "../../assets/img/Components/Collapse/Fleche.svg";

function Collapse({ titre, description }) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className="collapse" id={`collapse-${titre}`}>
      <div className="header-collapse">
        <div className="titre-collapse">{titre}</div>
        <span
          className={`fleche-collapse ${ouvert}`}
          onClick={() => setOuvert(!ouvert)}
        >
          <img src={fleche} alt="Ouvrir cette liste" />
        </span>
      </div>
      {
        /* si collapse TRUE , il déroule la description */
        ouvert && <div className="description-collapse">{description}</div>
      }
    </div>
  );
}

export default Collapse;
