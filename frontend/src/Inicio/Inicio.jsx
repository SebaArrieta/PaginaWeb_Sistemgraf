import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css"; 
import DOMPurify from "dompurify";

/* Archivos css */
import "./Inicio.css";
import "./InicioPequeño.css";

/* Imágenes de secciones */
import Aboutus from "./imagen/about-us.png";
import socio1 from "../nosotros/nosotrosImg/Logo-Bsolutions-Editable.png"; 
import socio2 from "./imagen/strategy_logo_orange.svg";
import mision from "../nosotros/nosotrosImg/mision.png"; /*Imagen de mision */
import vision from "../nosotros/nosotrosImg/vision.png"; /*Imagen vision*/

import ContactForm2 from "../Contacto/contactForm";

/* Imágenes de Modalidad de servicios */
import Nube from "./imagen/acceso-basado-en-la-nube.png";
import Performance from "./imagen/performance.png";
import Consultoria from "./imagen/servicio-de-consultoria.png";
import Tecnologia from "./imagen/Soluciones-de-Tecnologia.png";
import Mantenimiento from "./imagen/mantenimiento.png";
import Suscripcion from "./imagen/suscripcion.png";
import Escalabilidad from "./imagen/scalability.png";

/* Importar imagenes de inico acá, cambiar ruta si es necesario */
import Imagen1 from "./imagen/principal2.webp";
import Imagen2 from "./imagen/Imagen2.png";
import Imagen3 from "./imagen/Imagen3.png";

import { getServices }  from "../repositorios/Conexión";

const Inicio = () => {
  const history = useNavigate ();
  const [servicios, setServicios] = useState([]);
  const [copied, setCopied] = useState(null);

  /* Data de slides de Inicio */
  const slidesData = [
    {
      image: Imagen1,
      title: "Lideramos la transformación empresarial hacia un futuro de excelencia y crecimiento sostenible.",
      buttonText: "Conoce nuestros servicios",
      link: "/sistemgraf/servicios",
    },
    {
      image: Imagen2,
      title: "Impulsamos la innovación con soluciones estratégicas para cada negocio.",
      buttonText: "Descubre más",
      link: "/sistemgraf/servicios",
    },
    {
      image: Imagen3,
      title: "Construimos un futuro sostenible con tecnología y visión de largo plazo.",
      buttonText: "Explora nuestras soluciones",
      link: "/sistemgraf/servicios",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
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


  /* Settings se las cards de Nuestras soluciones */
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
        arrows: false, 
      } },
      
    ],
  };

  /* Setting de slides de Inicio */
  const settingsInicio = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      fade: true, 
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
          arrows: false, 
        } },
        
      ],
  };

  /* Acá para efectos */
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  
  /* Esto es para copiar al portapapeles. */
  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);

    setTimeout(() => {
      setCopied(null);
    }, 1500); // Cambia el color por 1 segundo
  };

    return (
      <>
        {/* Inicio */}
        <div className="prueba-slider" data-aos="fade-up">
          <Slider {...settingsInicio}>
            {slidesData.map((slide, index) => (
              <div key={index} className="prueba-container">
                <img src={slide.image} className="prueba-img"/>
                <div className="prueba-overlay">
                  <div className="prueba-text">
                    <h1>{slide.title}</h1>
                    <NavLink to={slide.link} className="prueba-btn">{slide.buttonText}</NavLink>
                  </div>
                </div>
                
              </div>
            ))}
          </Slider>
        </div>

        {/* Acerca de */}
        <div className="acercaDe-container">
          <div className="acercaDe-content" data-aos="fade-up">
            {/* Imagen de la empresa o el gato */}
            <div className="acercaDe-imagen">
              <img src={ Aboutus } loading="lazy" alt="Acerca de Sistemgraf"/>
            </div>

            {/* Texto informativo */}
            <div className="acercaDe-texto">
              <h2 className="titulo-amarillo">Acerca de Sistemgraf</h2>
              <p style={{ textAlign: "justify" }}>
                Somos Sistemgraf: inteligencia integrada para Recursos Humanos y procesos de negocio.
                Fundada en 2018, nuestra misión es transformar la forma en que las organizaciones
                gestionan su capital humano y toman decisiones estratégicas con el valor de los datos.
                Con un equipo de expertos apasionados por la innovación, destacamos en el uso de 
                Inteligencia Artificial, Business Intelligence y Analytics para impulsar el éxito empresarial.
              </p>
              
              {/* Botón Leer más */}
              <NavLink to="/sistemgraf/nosotros" className="btn-leer-mas">Leer más</NavLink>
            </div>
            </div>

            <div className="acercaDe-caja" data-aos="fade-up">
              <div className="caja-imagen">
                <img src={ vision } alt="Nuestra Visión"/>
              </div>
              <h3 className="caja-titulo">Nuestra Visión</h3>
              <p style={{ textAlign: "justify" }}>
                Liderar la Transformación Digital Estratégica fortaleciendo una cultura organizacional innovadora, adaptable y colaborativa. 
                Desarrollamos capacidades críticas en inteligencia de negocios, análisis de datos y competencias laborales, 
                impulsando un cambio sostenible donde el talento humano es el motor clave del éxito.
              </p>
            </div>

            <div className="acercaDe-caja" data-aos="fade-up">
              <div className="caja-imagen">
                <img src={ mision } alt="Nuestra Visión"/>
              </div>
              <h3 className="caja-titulo">Nuestra Misión</h3>
              <p style={{ textAlign: "justify" }}>
                Empoderar a las áreas de Recursos Humanos mediante el uso estratégico de datos integrados y una visión 360° del capital humano, 
                apalancados en modelos de inteligencia de negocios, inteligencia artificial y análisis estadístico avanzado. 
                Nuestro objetivo es facilitar la toma de decisiones con menor riesgo, garantizando un proceso de mejora continua en las organizaciones.
              </p>
            </div>
        </div>


        {/* Nuestras soluciones */}
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

                  {/* Contenedor de la descripción */}
                  <div className="servicio-texto">
                    <div className="quill-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(servicio.Description) }} />
                  </div>

                  {/* Contenedor del botón */}
                  <div className="servicio-boton">
                    <NavLink to="/sistemgraf/servicios" className="btn-mas-info">Leer más</NavLink>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>


        {/* Modalidad de servicios */}
        <div className="modServicio">
          {/* B-Solutions */}
          <div className="modServicio-container" data-aos="fade-up">
            <h2 className="titulo">Modalidad de Servicio</h2>
            <p className="subtitulo">Ofrecemos un servicio "SaaS", que permite obtener</p>

            <div className="modServicio-items" data-aos="fade-up">
              
              <div className="modServicio-item">
                <img src={ Nube } alt="Nube" className="icono-servicio" />
                <h3>Acceso basado en la nube</h3>
                <p>Solo necesitas una conexión a internet y un navegador.</p>
              </div>

              <div className="modServicio-item">
                <img src={ Performance } alt="Performance" className="icono-servicio"/>
                <h3>Performance Management</h3>
                <p>Mejora continua de la planificación y ejecución estratégica de tu empresa.</p>
              </div>

              <div className="modServicio-item" data-aos="fade-up">
                <img src={ Consultoria } alt="Consultoria" className="icono-servicio" />
                <h3>Servicios de Consultoría</h3>
                <p>Soluciones personalizadas con herramientas estratégicas para impulsar proyectos.</p>
              </div>

              <div className="modServicio-item" data-aos="fade-up">
                <img src={ Tecnologia } alt="Tecnologia" className="icono-servicio" />
                <h3>Soluciones de Tecnología</h3>
                <p>Aplicamos tecnología avanzada para optimizar procesos y potenciar el crecimiento.</p>
              </div>
            </div>
          </div>

          <div className="modServicio-container" data-aos="fade-up">
            <div className="modServicio-items" data-aos="fade-up">

              <div className="modServicio-item" data-aos="fade-up">
                <img src={ Mantenimiento } alt="Mantenimiento" className="icono-servicio" />
                <h3>Mantenimiento</h3>
                <p>Gestionado por Sistemgraf.</p>
              </div>

              <div className="modServicio-item" data-aos="fade-up">
                <img src={ Suscripcion } alt="Suscripcion" className="icono-servicio" />
                <h3>Suscripción</h3>
                <p>Se paga por usuario suscripción anual.</p>
              </div>

              <div className="modServicio-item" data-aos="fade-up">
                <img src={ Escalabilidad } alt="Escalabilidad" className="icono-servicio" />
                <h3>Escalabilidad</h3>
                <p>Fácil de escalar según las necesidades del cliente.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestros socios */}
        <div className="modServicio">
          <div className="modServicio-container" data-aos="fade-up">
            <h2 className="titulo">Nuestros socios estratégicos</h2>
          </div>
          <div className="socios-logos" data-aos="fade-up">
            <img src={ socio1 } alt="BSOLUTIONS" className="socio-logo bsolutions" />
            <img src={ socio2 } alt="Strategy" className="socio-logo strategy" />
          </div> 
        </div>

        {/* Contacto */}
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
              <ContactForm2>
              </ContactForm2>
            </div>

            {/* 📌 Sección de información de contacto */}
            <div className="contacto-info">
              <div className="contacto-grid">
                {[
                  { id: "telefono", label: "Número de teléfono", value: "+56 9 31979188", link: "tel:+56931979188" },
                  { id: "email", label: "E-mail", value: "contacto@sistemgraf.cl", link: "mailto:contacto@sistemgraf.cl" },
                  { id: "direccion_principal", label: "Dirección principal", value: "Sta. Elena, Colbún, Región Maule - Chile" },
                  { id: "direccion_sucursal", label: "Dirección sucursal", value: "Diego de Almagro 2246, Providencia, Santiago, Región Metropolitana — Chile" }
                ].map((item) => (
                  <div
                    key={item.id}
                    className={`contacto-card ${copied === item.id ? "copied" : ""}`}
                    onClick={() => copyToClipboard(item.value, item.id)}
                  >
                    <span className="icono"></span>
                    <h4 className="letra-label">{item.label}</h4>
                    {item.link ? (
                      <a href={item.link}>{item.value}</a>
                    ) : (
                      <p className="letra-blanca">{item.value}</p>
                    )}
                    {copied === item.id && <div className="copy-message">Copiado</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Mapa */}
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
  