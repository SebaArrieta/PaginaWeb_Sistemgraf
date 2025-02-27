import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { BiCloudUpload, BiWrench, BiBell, BiTrendingUp } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";


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

  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    arrows: true,
    slidesToShow: 3, // Mostrar 3 tarjetas a la vez
    autoplay: true,
    autoplaySpeed: 10000,
    beforeChange: (current, next) => setActiveIndex(next), // Detecta cambio de slide
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
    return (
      <>
        <div className="inicio-container">
          <div className="inicio-text" data-aos="slide-right">
            <h1>Lideramos la transformación empresarial hacia un futuro de excelencia y crecimiento sostenible.</h1>
            <NavLink to="/servicios" className="btn-servicios">Conoce nuestros servicios</NavLink>
          </div>
          <div className="inicio-imagen" data-aos="slide-left">
            <img src={LogoAzul} alt="Sistemgraf" />
          </div>
        </div>
        
        <div className="modServicio">
          <div className="modServicio-container" data-aos="fade-up">
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
          <div className="acercaDe-content" data-aos="fade-up">
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
              <NavLink to="/nosotros" className="btn-leer-mas">Leer más</NavLink>
            </div>
          </div>
        </div>

        <div className="soluciones-container" >
          <h2 className="titulo-soluciones" data-aos="fade-up">Nuestras Soluciones</h2>
          <Slider  {...settings}>
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className={`servicio-item ${index === activeIndex ? "active" : ""}`}
              >
                <div className="servicio-card" data-aos="fade-up">
                  {/* Contenedor de la imagen */}
                  <div className="servicio-img-container">
                    <img
                      src={servicio.Img}
                      alt="Imagen del servicio"
                      className="servicio-img"
                    />
                  </div>

                  {/* Contenedor del título */}
                  <div className="servicio-title-container">
                    <h5 className="servicio-title">{servicio.Name}</h5>
                  </div>

                  {/* Caja inferior con descripción */}
                  <div className="servicio-content">
                    <p className="servicio-description">{servicio.Description}</p>
                    <NavLink to="/servicios" className="btn-mas-info">Leer más </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        
      </>
    );
  };
  
  export default Inicio;
  