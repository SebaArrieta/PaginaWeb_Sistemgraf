import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Servicio.css"; 
import { getServices } from "../repositorios/Conexión";

const Servicios = () => {
  const history = useNavigate();
  const [servicios, setServicios] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServicios(data || []);
      } catch (error) {
        console.error("Error al obtener servicios:", error);
        setServicios([]);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="container-new" style={{ paddingTop: '100px' }}>
      <div className="row justify-content-center">

        {servicios.map((servicio, ID) => {
          const colores = ["#A3E7FF", "#FFEB8A", "#9EC6E0"];
          const colorFondo = colores[ID % colores.length];

          return (
            <div key={ID} className="col-md-4 mb-4">
              <div
                className="card servicio-card-serv"
                style={{ backgroundColor: colorFondo }}
              >
                <img
                  src={servicio.Img}
                  alt="Imagen del servicio"
                  className={`card-img-top servicio-img-serv ${isLoaded ? "fade-in" : "hidden"}`}
                  onLoad={() => setIsLoaded(true)} 
                />

                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>
                    {servicio.Name}
                  </h5>

                  <p className="card-text" style={{ fontSize: "1.2rem", color: "#222", lineHeight: "1.5" }}>
                    {servicio.Content.split("*").map((part, index) => {
                      // Buscar el primer punto después del asterisco
                      const match = part.match(/(.*?\.)/);
                      const subtitulo = match ? match[1] : null;
                      const resto = match ? part.replace(subtitulo, "").trim() : part.trim();

                      return (
                        <span key={index} className="contenido-servicio">
                          {index > 0 && <br />}
                          •{" "}
                          {subtitulo && (
                            <span className="subtitulo">
                              <span className="cuadrado"></span>
                              <strong>{subtitulo}</strong>
                            </span>
                          )}
                          {resto}
                        </span>
                      );
                    })}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Servicios;
