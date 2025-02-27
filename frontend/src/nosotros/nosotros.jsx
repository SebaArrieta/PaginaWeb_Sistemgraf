import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./nosotros.css"; 
import "aos/dist/aos.css"; 
import AOS from "aos";

/*Imagenes*/
import principal from "./nosotrosImg/nosotros2.png"; /*Imagen principal*/
import mision from "./nosotrosImg/mision.png"; /*Imagen de mision */
import vision from "./nosotrosImg/vision.png"; /*Imagen vision*/
/*Imagenes de nuestros valores*/ 
import excelencia from "./nosotrosImg/excelencia.png";
import innovacion from "./nosotrosImg/innovacion.png";
import colaboracion from "./nosotrosImg/colaboracion.png";
import empoderamiento from "./nosotrosImg/empoderamiento.png";
import etica from "./nosotrosImg/etica.png";
import cliente from "./nosotrosImg/cliente.png";
import adaptabilidad from "./nosotrosImg/adaptibilidad.png";
import sostenibilidad from "./nosotrosImg/sostenibilidad.png";
/*Imagenes de nuestro equipo*/
import director from "./mauricio.png";
import jefeProyectos from "./fernolds.png";
/*Imagenes de nuestros socios*/
import socio1 from "./Logo-Bsolutions-Editable.png"; 
import socio2 from "../Inicio/strategy_logo_orange.svg";



const Nosotros = () => {
  const [valores, setValores] = useState([
    { titulo: "Excelencia", descripcion: "Compromiso con la excelencia en todos los aspectos de nuestros servicios y soluciones.", imagen: excelencia },
    { titulo: "Innovación", descripcion: "Fomentar la innovación constante para mantenernos a la vanguardia de la tecnología y las mejores prácticas.", imagen: innovacion },
    { titulo: "Colaboración", descripcion: "Trabajar en estrecha colaboración con nuestros clientes para alcanzar objetivos compartidos." , imagen: colaboracion},
    { titulo: "Empoderamiento", descripcion: "Empoderar a las organizaciones y a sus talentos humanos para alcanzar objetivos compartidos." , imagen: empoderamiento},
    { titulo: "Ética", descripcion: "Actuar con integridad y ética en todas nuestras interacciones y decisiones." , imagen: etica},
    { titulo: "Orientación al Cliente", descripcion: "Poner siempre las necesidades y metas de nuestros clientes en el centro de nuestras acciones.", imagen: cliente },
    { titulo: "Sostenibilidad", descripcion: "Abogar por prácticas comerciales sostenibles y responsables." , imagen: sostenibilidad},
    { titulo: "Adaptabilidad", descripcion: "Ser ágiles y adaptarnos a los cambios del entorno empresarial y tecnológico.", imagen: adaptabilidad },
  ]);

  const [equipo, setEquipo] = useState([
    { nombre: "Mauricio Olivares", rango: "Director", descripcion: "Director de Sistemgraf, con experiencia de varios años en la carrera.", imagen: director},
    { nombre: "Fernolds Alvarado", rango: "Jefe de Proyectos", descripcion: "Jefe de proyectos de Sistemgraf, con un gran conocimiento.", imagen: jefeProyectos},
  ]);

  const handleInputChange = (index, field, value) => {
    const newValores = [...valores];
    newValores[index][field] = value;
    setValores(newValores);
  };

   /* Acá para efectos */
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div style={{ paddingTop: '70px' }}>
      {/* Contenedor de ancho completo para la sección principal, misión y visión */}
      <div className="full-width-container bg-darkblue text-white">
        <div className="nosotros-container" data-aos="fade-up">
          <h1 className="nosotros-title text-center"><strong>Sobre Sistemgraf</strong></h1>

          {/* Sección principal con imagen y texto */}
          <div className="content d-flex align-items-center justify-content-center flex-column flex-md-row">
            <div className="text mb-3 mb-md-0 col-12 col-md-6">
              <p>
                Somos Sistemgraf: inteligencia integrada para Recursos Humanos y procesos de negocio. Fundada en 2018, nuestra misión es transformar la forma en que las organizaciones gestionan su capital humano y 
                toman decisiones estratégicas con el valor de los datos. Con un equipo de expertos apasionados por la innovación, destacamos en el uso de Inteligencia Artificial, Business Intelligence y Analytics para 
                impulsar el éxito empresarial.
              </p>
            </div>
            <div className="image ">
              <img src={principal} alt="Descripción" className="img-large"/>
            </div>
          </div>

          {/* Tarjeta de Misión */}
          <div className="row mb-4">
            <div className="col-12" >
              <div className="nosotros-card" style={{ backgroundColor: "#ffffff" }} data-aos="fade-up">
                <div className="row no-gutters">
                  <div className="col-12 col-md-4">
                    <div className="nosotros-card-img-container" >
                      <img src={mision} className="nosotros-card-img" alt="Misión" />
                    </div>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="nosotros-card-body" style={{ backgroundColor: "#ffffff" }}>
                      <h5 className="nosotros-card-text text-center"><strong>Misión</strong></h5>
                      <p className="nosotros-card-text">
                        Empoderar a las áreas de Recursos Humanos mediante el uso estratégico de datos integrados y una visión 360° del capital humano, apalancados en modelos de inteligencia de negocios, inteligencia artificial y análisis estadístico avanzado. Nuestro objetivo es facilitar la toma de decisiones con menor riesgo, garantizando un proceso de mejora continua en las organizaciones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta de Vision */}
          <div className="row mb-2">
            <div className="col-12">
              <div className="nosotros-card" style={{ backgroundColor: "#ffffff"}} data-aos="fade-up">
                <div className="row no-gutters">
                  <div className="col-12 col-md-4">
                    <div className="nosotros-card-img-container">
                      <img src={vision} className="nosotros-card-img" alt="Visión" />
                    </div>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="nosotros-card-body" style={{ backgroundColor: "#ffffff" }}>
                      <h5 className="nosotros-card-text text-center"><strong>Visión</strong></h5>
                      <p className="nosotros-card-text">
                        Liderar la Transformación Digital Estratégica fortaleciendo una cultura organizacional innovadora, adaptable y colaborativa. Desarrollamos capacidades críticas en inteligencia de negocios, análisis de datos y competencias laborales, impulsando un cambio sostenible donde el talento humano es el motor clave del éxito.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor de ancho completo para "Nuestros Valores" */}
      <div className="full-width-container bg-lightblue text-black">
        <div className="valores-container" >
          <h2 className="valores-title text-center"><strong>Nuestros Valores</strong></h2>
          <div className="row">
            {valores.map((valor, index) => (
              <div key={index} className="col-12 col-md-6 mb-2">
                <div className="nosotros-card h-100 valores-card" data-aos="fade-up" style={{ backgroundColor: "#ffffff" }}>
                  <div className="row no-gutters">
                    <div className="col-12 col-md-4">
                      <div className="nosotros-card-img-container" >
                        <img src={valor.imagen} className="valores-card-img" alt={valor.titulo} />
                      </div>
                    </div>
                    <div className="col-12 col-md-8">
                      <div className="nosotros-card-body" style={{ backgroundColor: "#ffffff" }}>
                        <h5 className="nosotros-card-text text-center">{valor.titulo}</h5>
                        <p className="nosotros-card-text">{valor.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contenedor de ancho completo para "Nuestro Equipo" */}
      <div className="full-width-container bg-darkblue text-white">
        <div className="equipo-container" >
          <h1 className="nosotros-title text-center"><strong>Nuestro Equipo</strong></h1>
          <div className="row">
            {equipo.map((miembro, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="nosotros-card h-100" style={{ backgroundColor: "#ffffff" }} data-aos="fade-up">
                  <div className="row no-gutters">
                    <div className="col-12 col-md-4">
                      <div className="nosotros-card-img-container">
                        <img src={miembro.imagen} className="equipo-card-img" alt={miembro.nombre} />
                      </div>
                    </div>
                    <div className="col-12 col-md-8">
                      <div className="nosotros-card-body" style={{ backgroundColor: "#ffffff" }}>
                        <h5 className="nosotros-card-text text-center"><strong>{miembro.nombre}</strong></h5>
                        <h6 className="mb-2 text-muted text-center">{miembro.rango}</h6>
                        <p className="nosotros-card-text text-center">{miembro.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contenedor de ancho completo para "Nuestros socios" */}
      <div className="full-width-container bg-lightblue text-black">
        <div className="nosotros-container" data-aos="fade-up">
          <h2 className="title valores-title text-center"><strong>Nuestros Socios Estratégicos</strong></h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="col-md-12">
                <img src={socio1}  className="nosotros-card-img" alt="Cliente 1" style={{ height: "40%", objectFit: "cover" }} />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="col-md-12">
                <img src={socio2}  className="nosotros-card-img" alt="Cliente 2" style={{ height: "30%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;