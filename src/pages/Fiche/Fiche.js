import React from "react";
import "./Fiche.css";
import { useParams, Navigate } from "react-router-dom";
import ListeLogements from "../../assets/data/logements.json";
import Carrousel from "../../components/Carrousel/Carrousel";
import Tag from "../../components/Tag/Tag";
import EtoilePleine from "../../assets/img/Pages/Fiche-logement/Etoile.png";
import EtoileVide from "../../assets/img/Pages/Fiche-logement/EtoileVide.png";
import Collapse from "../../components/Collapse/Collapse";

function Fiche() {
  // Récupère l'ID de la fiche de logement à partir de l'URL
  const { id } = useParams();

  // Recherche la fiche de logement correspondant à l'ID
  const ficheLogement = ListeLogements.find((logement) => logement.id === id);

  // Génère les tags de la fiche de logement
  const tagsFicheLogement = ficheLogement?.tags.map((tag, index) => {
    return <Tag key={index} nom={tag} />;
  });

  // Génère les étoiles de notation de la fiche de logement
  const notesFicheLogement = [];
  let etoileComplete = true;

  for (let index = 0; index < 5; index++) {
    if (index === parseInt(ficheLogement?.rating)) {
      etoileComplete = false;
    }
    if (etoileComplete) {
      notesFicheLogement.push(
        <img
          key={index}
          className="etoile"
          src={EtoilePleine}
          alt={`${ficheLogement?.rating}/5`}
        />
      );
    } else {
      notesFicheLogement.push(
        <img
          key={index}
          className="etoile"
          src={EtoileVide}
          alt={`${ficheLogement?.rating}/5`}
        />
      );
    }
  }

  // Génère la liste des équipements de la fiche de logement
  const equipementsFicheLogement = ficheLogement?.equipments.map(
    (equipement, index) => {
      return <li key={index}>{equipement}</li>;
    }
  );

  // Rendu de la fiche de logement
  return (
    <>
      {ficheLogement ? (
        <div className="Fiche">
          <Carrousel images={ficheLogement?.pictures} />
          <div className="logements-propietaire">
            <div className="information-logements">
              <span className="titre-logement">{ficheLogement?.title}</span>
              <span className="endroit-logement">
                {ficheLogement?.location}
              </span>
              <div className="tags">{tagsFicheLogement}</div>
            </div>
            <div className="proprietaire-note">
              <div className="information-propietaire">
                <span className="nom-proprietaire">
                  {ficheLogement?.host.name}
                </span>
                <img
                  className="photo-propietaire"
                  src={ficheLogement?.host.picture}
                  alt="Propriétaire"
                />
              </div>
              <div className="note">{notesFicheLogement}</div>
            </div>
          </div>
          <div className="description-equipements">
            <Collapse
              titre="Description"
              description={ficheLogement?.description}
            />
            <Collapse
              titre="Équipements"
              description={<ul>{equipementsFicheLogement}</ul>}
            />
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
}

export default Fiche;
