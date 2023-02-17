import React from "react";
import "./Acceuil.css";
import Banniere from "../../components/Banniere/Banniere";
import banniereAccueil from "../../assets/img/Pages/Accueil/Banniere.png";
import { NavLink } from "react-router-dom";
import Card from "../../components/Card/Card";
import ListeLogements from "../../assets/data/logements.json";

function Acceuil() {
  return (
    <div className="Accueil">
      <Banniere
        image={banniereAccueil}
        texte="Chez vous, partout et ailleurs"
      />
      <div className="liste-logements">
        {ListeLogements.map((logement) => (
          <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
            <Card
              key={logement.id}
              id={logement.id}
              image={logement.cover}
              titre={logement.title}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Acceuil;
