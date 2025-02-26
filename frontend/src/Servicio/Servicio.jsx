import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Servicio.css"; 
import imagen from "./imagen.png";


import { getServices }  from "../repositorios/Conexión";
const Servicios = () => {
  const history = useNavigate ();
  const [servicios, setServicios] = useState([]);

  /* */
  useEffect(() => {
    const fetchServices = async () => {
        try {
            const data = await getServices();
            setServicios(data || []); // Set an empty array as fallback
          } catch (error) {
            console.error("Error al obtener servicios:", error);
            setServicios([]); // Prevent undefined state
          }
    };

    fetchServices();
  }, []);

  return (
<div className="container-new">
      <div className="row">
        {servicios.map((servicio, ID) => (
          <div key={ID} className="col-md-4 mb-4">
            <div className="card servicio-card">
              <img src={servicio.Img} alt="Imagen del servicio" className="card-img-top servicio-img" />
              <div className="card-body">
                <h5 className="card-title">{servicio.Name}</h5>
                <p className="card-text">{servicio.Content}</p>
                <button className="btn btn-primary">Más información</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;