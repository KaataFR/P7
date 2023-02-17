import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/img/Layouts/Footer/Logo.png";

function Footer() {
  const currentYear = new Date().getFullYear(); // obtenir l'année en cours

  return (
    <footer>
      <div id="footer-container">
        <img src={logoFooter} alt="Logo" />
        <p>&copy; {currentYear} Kasa. Tous droits réservés</p>
      </div>
    </footer>
  );
}

export default Footer;
