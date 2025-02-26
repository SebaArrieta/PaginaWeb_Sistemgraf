import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {  BrowserRouter, Link } from "react-router-dom";
import { BiCloudUpload, BiWrench, BiBell, BiTrendingUp } from "react-icons/bi";

import "./Inicio.css";
import LogoAzul from "./LogoS_Azul.png";
import LogoBlanco from "./LogoS_Blanco.png";
import Gato from "./gato.png";

import { getServices }  from "../repositorios/Conexión";

const Inicio = () => {
  const history = useNavigate ();
  const [servicios, setServicios] = useState([]);

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
  const parseDescription = (text) => {
    // Divide el texto en partes que coincidan con *algo*
    return text.split(/(\*[^*]+\*)/g).map((segment, index) => {
      // Si la parte empieza y termina con asteriscos, se elimina y se envuelve en <strong>
      if (segment.startsWith("*") && segment.endsWith("*")) {
        return <strong key={index}>{segment.slice(1, -1)}</strong>;
      }
      return segment;
    });
  };
  
    return (
      <>
        <div className="inicio-container">
          <div className="inicio-text">
            <h1>Lideramos la transformación empresarial hacia un futuro de excelencia y crecimiento sostenible.</h1>
            <button className="btn-servicios">Conoce nuestros servicios</button>
          </div>
          <div className="inicio-imagen">
            <img src={LogoAzul} alt="Sistemgraf" />
          </div>
        </div>
        
        <div className="modServicio">
          <div className="modServicio-container">
            <h2 className="titulo">Modalidad de Servicio</h2>
            <p className="subtitulo">Ofrecemos un servicio "SaaS", que permite obtener</p>

            <div className="modServicio-items">
              <div className="modServicio-item">
                <BiCloudUpload className="icono-servicio" />
                <h3>Acceso basado en la nube</h3>
                <p>Solo necesitas una conexión a internet y un navegador.</p>
              </div>

              <div className="modServicio-item">
                <BiWrench className="icono-servicio" />
                <h3>Mantenimiento</h3>
                <p>Gestionado por Sistemgraf.</p>
              </div>

              <div className="modServicio-item">
                <BiBell className="icono-servicio" />
                <h3>Suscripción</h3>
                <p>Se paga por usuario suscripción anual.</p>
              </div>

              <div className="modServicio-item">
                <BiTrendingUp className="icono-servicio" />
                <h3>Escalabilidad</h3>
                <p>Fácil de escalar según las necesidades del cliente.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="acercaDe-container">
          <div className="acercaDe-content">
            {/* Imagen de la empresa o el gato */}
            <div className="acercaDe-imagen">
              <img src={ Gato } alt="Acerca de Sistemgraf" />
            </div>

            {/* Texto informativo */}
            <div className="acercaDe-texto">
              <h2 className="titulo-amarillo">Acerca de Sistemgraf</h2>
              <p>
                Somos Sistemgraf: inteligencia integrada para Recursos Humanos y procesos de negocio.
                Fundada en 2018, nuestra misión es transformar la forma en que las organizaciones
                gestionan su capital humano y toman decisiones estratégicas con el valor de los datos.
                Con un equipo de expertos apasionados por la innovación, destacamos en el uso de 
                Inteligencia Artificial, Business Intelligence y Analytics para impulsar el éxito empresarial.
              </p>
              
              {/* Botón Leer más */}
              <button className="btn-leer-mas">Leer más</button>
            </div>
          </div>
        </div>

        <div className="soluciones-container">
          <div className="servicios-grid">
            {servicios.map((servicio, ID) => (
              <div key={ID} className="servicio-item">
                <div className="servicio-card-custom">
                  <div className="servicio-header">
                      {/* Contenedor de la imagen */}
                      <div className="servicio-img-container">
                          <img
                              src={servicio.Img}
                              alt="Imagen del servicio"
                              className="servicio-img-custom"
                          />
                      </div>
                      
                      {/* Contenedor del título */}
                      <div className="servicio-title-container">
                          <h5 className="servicio-title">{servicio.Name}</h5>
                      </div>
                  </div>

                  {/* Caja inferior con descripción */}
                  <div className="servicio-content">
                    <p className="servicio-description">{servicio.Description}</p>
                    <button className="btn-mas-info">Leer más</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </>
    );
  };
  
  export default Inicio;
  