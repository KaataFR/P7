import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Accueil from "../pages/Accueil/Acceuil";
import APropos from "../pages/A-propos/APropos";
import Erreur404 from "../pages/404/404";
import Fiche from "../pages/Fiche/Fiche";

function RoutesPath() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/logement/:id" element={<Fiche />}/>  
          <Route path="*" element={<Erreur404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default RoutesPath;
