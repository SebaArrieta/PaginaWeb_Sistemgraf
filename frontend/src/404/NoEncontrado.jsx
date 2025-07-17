import React from "react";
import "./Noencontrado.css";
import imagen from "../pagina-no-encontrada.png"
const NotFound = () => {
  return (
    <div class="not-found-container">
        <img src={ imagen } className="imagen"/>
        <h1>404 - Página no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
        <div> Icono diseñados por <a href="" title="flatart_icons"> flatart_icons </a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es'</a></div>
    </div>
  );
};

export default NotFound;