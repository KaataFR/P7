import React, { useState, useEffect } from "react";
import "./Carrousel.css";
import Fleche from "../../assets/img/Components/Carrousel/Fleche.png";

function Carrousel(props) {
  // Initialise l'état local pour suivre l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Déstructure les images passées en tant que prop
  const { images } = props;

  // Obtient le nombre total d'images
  const totalImages = images.length;

  // Déplace l'index de l'image actuellement affichée vers la gauche
  const showPreviousImage = () => {
    const previousIndex = (currentIndex - 1 + totalImages) % totalImages;
    setCurrentIndex(previousIndex);
  };

  // Déplace l'index de l'image actuellement affichée vers la droite
  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % totalImages;
    setCurrentIndex(nextIndex);
  };

  // Rendu de la liste des images du carrousel avec la classe "actif" sur l'image actuellement affichée
  const imageList = images.map((image, index) => (
    <img
      key={index}
      className={
        index === currentIndex ? "carrousel-img actif" : "carrousel-img"
      }
      src={image}
      alt="Logement"
    />
  ));

  // Rendu des flèches de navigation si le carrousel contient plus d'une image
  const navigationArrows = totalImages > 1 && (
    <>
      <img
        className="fleche fleche-gauche"
        src={Fleche}
        alt="Contenu précedént"
        onClick={showPreviousImage}
      />
      <img
        className="fleche fleche-droite"
        src={Fleche}
        alt="Contenu suivant"
        onClick={showNextImage}
      />
    </>
  );

  // Utilisation de useEffect pour faire défiler les images automatiquement
  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 5000); // change l'image toutes les 5 secondes (5000 millisecondes)
    return () => clearInterval(interval);
  },);
  

  // Rendu final du carrousel avec les images et les flèches de navigation
  return (
    <div className="carrousel">
      {navigationArrows}
      {imageList}
      <p className="carrousel-index">
        {" "}
        {currentIndex + 1} / {totalImages}{" "}
      </p>
    </div>
  );
}

export default Carrousel;
