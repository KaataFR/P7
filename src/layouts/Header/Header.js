import React from "react";
import "./Header.css";
import logoHeader from "../../assets/img/Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <img src={logoHeader} alt="Logo"/>
            <nav>
                <NavLink to="/accueil" className="lien-site lien-menu">Accueil</NavLink>
                <NavLink to="/a-propos" className="lien-site lien-menu">A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;