import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { BiCloudUpload, BiWrench, BiBell, BiTrendingUp } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";  /* Acá para efectos */
import "aos/dist/aos.css"; 


import "./Inicio.css";
import LogoAzul from "./LogoS_Azul.png";
import LogoBlanco from "./LogoS_Blanco.png";
import Aboutus from "./about-us.webp";
import socio1 from "../nosotros/Logo-Bsolutions-Editable.png"; 
import socio2 from "./strategy_logo_orange.svg";
import mision from "../nosotros/nosotrosImg/mision.png"; /*Imagen de mision */
import vision from "../nosotros/nosotrosImg/vision.png"; /*Imagen vision*/

import { getServices }  from "../repositorios/Conexión";

const Inicio = () => {
  const history = useNavigate ();
  const [servicios, setServicios] = useState([]);
  const [copied, setCopied] = useState(null);


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
    centerPadding: "0px",
    infinite: true,
    centerMode: true,
    arrows: true,
    slidesToShow: 3, // Mostrar 3 tarjetas a la vez
    autoplay: true,
    autoplaySpeed: 10000,
    beforeChange: (current, next) => setActiveIndex(next), // Detecta cambio de slide
    responsive: [
      { breakpoint: 1024, settings: { 
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "0px",
      } },
      { breakpoint: 768, settings: { 
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "0px",
        adaptiveHeight: true, 
      } },
      
    ],
  };

  /* Acá para efectos */
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
    /*Esto es para copiar al portapapeles. */
    const copyToClipboard = (text, id) => {
      navigator.clipboard.writeText(text);
      setCopied(id);

      setTimeout(() => {
        setCopied(null);
      }, 1500); // Cambia el color por 1 segundo
    };

    return (
      <>
        <div className="inicio-container">
          <div className="inicio-text" data-aos="slide-right">  
            <h1>Lideramos la transformación empresarial hacia un futuro de excelencia y crecimiento sostenible.</h1>
            <NavLink to="/servicios" className="btn-servicios">Conoce nuestros servicios</NavLink>
          </div>
          <div className="inicio-imagen" data-aos="fade-up">
            <img src={LogoAzul} alt="Sistemgraf" />
          </div>
        </div>
        
        <div className="modServicio">
          <div className="modServicio-container" data-aos="fade-up">
            <h2 className="titulo">Modalidad de Servicio</h2>
            <p className="subtitulo">Ofrecemos un servicio "SaaS", que permite obtener</p>

            <div className="modServicio-items" data-aos="fade-up">
              <div className="modServicio-item">
                <BiCloudUpload className="icono-servicio" />
                <h3>Acceso basado en la nube</h3>
                <p>Solo necesitas una conexión a internet y un navegador.</p>
              </div>

              <div className="modServicio-item" data-aos="fade-up">
                <BiWrench className="icono-servicio" />
                <h3>Mantenimiento</h3>
                <p>Gestionado por Sistemgraf.</p>
              </div>

              <div className="modServicio-item" data-aos="fade-up">
                <BiBell className="icono-servicio" />
                <h3>Suscripción</h3>
                <p>Se paga por usuario suscripción anual.</p>
              </div>

              <div className="modServicio-item" data-aos="fade-up">
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
              <img src={ Aboutus } alt="Acerca de Sistemgraf" />
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

            <div className="acercaDe-caja" data-aos="fade-up">
              <div className="caja-imagen">
                <img src={ vision } alt="Nuestra Visión" />
              </div>
              <h3 className="caja-titulo">Nuestra Visión</h3>
              <p>
                Liderar la Transformación Digital Estratégica fortaleciendo una cultura organizacional innovadora, adaptable y colaborativa. 
                Desarrollamos capacidades críticas en inteligencia de negocios, análisis de datos y competencias laborales, 
                impulsando un cambio sostenible donde el talento humano es el motor clave del éxito.
              </p>
            </div>

            <div className="acercaDe-caja" data-aos="fade-up">
              <div className="caja-imagen">
                <img src={ mision } alt="Nuestra Visión" />
              </div>
              <h3 className="caja-titulo">Nuestra Misión</h3>
              <p>
                Empoderar a las áreas de Recursos Humanos mediante el uso estratégico de datos integrados y una visión 360° del capital humano, 
                apalancados en modelos de inteligencia de negocios, inteligencia artificial y análisis estadístico avanzado. 
                Nuestro objetivo es facilitar la toma de decisiones con menor riesgo, garantizando un proceso de mejora continua en las organizaciones.
              </p>
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

                  {/* 📌 Contenedor de la descripción */}
                  <div className="servicio-texto">
                    <p className="servicio-description">{servicio.Description}</p>
                  </div>

                  {/* 📌 Contenedor del botón */}
                  <div className="servicio-boton">
                    <NavLink to="/servicios" className="btn-mas-info">Leer más</NavLink>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="modServicio">
          <div className="modServicio-container" data-aos="fade-up">
            <h2 className="titulo">Nuestros socios estratégicos</h2>
          </div>
          <div className="socios-logos" data-aos="fade-up">
            <img src={ socio1 } alt="BSOLUTIONS" className="socio-logo bsolutions" />
            <img src={ socio2 } alt="Strategy" className="socio-logo strategy" />
          </div> 
        </div>

        
        <div className="contacto-container">
          {/* Encabezado centrado sobre ambas columnas */}
          <div className="contacto-header" data-aos="fade-up">
            <h2 className="titulo-amarillo">Contactos</h2>
            <p className="letra-blanca">
              Nos puedes contactar también por estos medios.
            </p>
          </div>

          {/* Contenido en dos columnas */}
          <div className="contacto-content" data-aos="fade-up">
            {/* 📝 Formulario de contacto */}
            <div className="contacto-form">
              <form>
                <div className="input-group">
                  <input type="text" placeholder="Nombre" className="input-field" />
                  <input type="email" placeholder="Email" className="input-field" />
                </div>
                <input type="text" placeholder="Sitio web" className="input-field full-width" />
                <textarea placeholder="Mensaje" className="input-field full-width textarea"></textarea>
                <button type="submit" className="btn-enviar">Enviar mensaje</button>
              </form>
            </div>

            {/* 📌 Sección de información de contacto */}
            <div className="contacto-info">
            <div className="contacto-grid">
        {[
          { id: "telefono", label: "NÚMERO DE TELÉFONO", value: "+56 9 31979188", link: "tel:+56931979188" },
          { id: "email", label: "E-MAIL", value: "contacto@sistemgraf.cl", link: "mailto:contacto@sistemgraf.cl" },
          { id: "direccion_principal", label: "DIRECCIÓN PRINCIPAL", value: "Sta. Elena, Colbún, Región Maule - Chile" },
          { id: "direccion_sucursal", label: "DIRECCIÓN SUCURSAL", value: "Diego de Almagro 2246, Providencia, Santiago, Región Metropolitana — Chile" }
        ].map((item) => (
          <div
            key={item.id}
            className={`contact-card ${copied === item.id ? "copied" : ""}`}
            onClick={() => copyToClipboard(item.value, item.id)}
          >
            <span className="icono"></span>
            <h3>{item.label}</h3>
            {item.link ? (
              <a href={item.link}>{item.value}</a>
            ) : (
              <p>{item.value}</p>
            )}
            {copied === item.id && <div className="copy-message">Copiado</div>}
          </div>
        ))}
      </div>
            </div>
          </div>
        </div>

        <div className="map-container">
          <div className="map-content" data-aos="fade-up">
            <iframe
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.2296769233785!2d-71.43666299579252!3d-35.746665067634694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96658ed340a819d3%3A0x575bfb2cbe146faf!2sPuente%20Sta.%20Elena%2C%20Colb%C3%BAn%2C%20Maule!5e0!3m2!1ses!2scl!4v1739815346213!5m2!1ses!2scl"
              allowFullScreen=""
              className="map-frame"
            ></iframe>
          </div>
        </div>

        
      </>
    );
  };
  
  export default Inicio;
  