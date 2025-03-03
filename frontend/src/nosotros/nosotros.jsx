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
import director from "./nosotrosImg/mauricio.png";
import jefeProyectos from "./nosotrosImg/fernolds.png";
/*Imagenes de nuestros socios*/
import socio1 from "./nosotrosImg/Logo-Bsolutions-Editable.png"; 
import socio2 from "../Inicio/imagen/strategy_logo_orange.svg";



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
    document.documentElement.scrollTop = 0; // Fuerza el inicio sin animación
    document.body.scrollTop = 0; 
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div >
      {/* Contenedor de ancho completo para la sección principal, misión y visión */}
      <div className="full-width-container bg-gradiente text-white" style={{ paddingTop: '100px' }}>
        <div className="nosotros-container" data-aos="fade-up">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h1 className="nosotros-title " ><strong>Sobre Sistemgraf</strong></h1>
            </div>

            {/* Sección principal con imagen y texto */}
            <div className="row align-items-center">
              <div className="col-12 col-md-6 px-md-4 py-3" style={{ textAlign: "justify", lineHeight: "1.7" }}>
                <p className="mb-4"><strong>Somos Sistemgraf:</strong> inteligencia integrada para Recursos Humanos y procesos de negocio.</p>

                <p className="mb-4">
                  Fundada en <strong>2018</strong>, nuestra misión es transformar la forma en que las organizaciones 
                  <strong> gestionan su capital humano</strong> y <strong>toman decisiones estratégicas</strong> mediante el poder de los datos.
                </p>

                <p className="mb-4">
                  Con un equipo de expertos apasionados por la innovación, nos destacamos en el uso de:
                </p>

                <ul className="mb-4 ps-3">
                  <li><strong>Inteligencia Artificial</strong></li>
                  <li><strong>Business Intelligence</strong></li>
                  <li><strong>Analytics</strong></li>
                </ul>

                <p className="mb-0">
                  Nuestro objetivo es <strong>impulsar el éxito empresarial</strong>, ofreciendo soluciones inteligentes y estratégicas 
                  para la gestión del talento.
                </p>

              </div>
              <div className="col-12 col-md-6 text-center ">
                <img src={principal} alt="Descripción" className="img-large" style={{ maxWidth: "100%", height: "auto" }}/>
              </div>
            </div>
          </div>

          {/* Tarjeta de Misión */}
          <div className="row mt-4">
            <div className="col-12 col-md-6 mb-4"  >
              <div className="nosotros-card h-100" style={{ backgroundColor: "#ffffff" }} data-aos="fade-up">
                <div className="row no-gutters">
                  <div className="col-12 col-md-4" >
                    <div className="nosotros-card-img-container" >
                      <img src={mision} className="nosotros-card-img" alt="Misión" />
                    </div>
                  </div>
                  <div className="col-12 col-md-8">
                    <div className="nosotros-card-body" style={{ backgroundColor: "#ffffff" }}>
                      <h5 className="nosotros-card-text text-center"><strong>Misión</strong></h5>
                      <p className="nosotros-card-text " style={{ textAlign: "justify"}}>
                        Empoderar a las áreas de Recursos Humanos mediante el uso estratégico de datos integrados y una visión 360° del capital humano, apalancados en modelos de inteligencia de negocios, inteligencia artificial y análisis estadístico avanzado. 
                      </p>
                      <p className="nosotros-card-text " style={{ textAlign: "justify"}}>
                        Nuestro objetivo es facilitar la toma de decisiones con menor riesgo, garantizando un proceso de mejora continua en las organizaciones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            {/* Tarjeta de Vision */}
    
            <div className="col-12 col-md-6 mb-4">
              <div className="nosotros-card h-100" style={{ backgroundColor: "#ffffff"}} data-aos="fade-up">
                <div className="row no-gutters">
                  <div className="col-12 col-md-4">
                      <div className="nosotros-card-img-container">
                        <img src={vision} className="nosotros-card-img" alt="Visión" />
                      </div>
                    </div>
                    <div className="col-12 col-md-8">
                      <div className="nosotros-card-body" style={{ backgroundColor: "#ffffff" }}>
                        <h5 className="nosotros-card-text text-center"><strong>Visión</strong></h5>
                        <p className="nosotros-card-text" style={{ textAlign: "justify"}}>
                          Liderar la Transformación Digital Estratégica fortaleciendo una cultura organizacional innovadora, adaptable y colaborativa. 
                        </p>
                        <p className="nosotros-card-text" style={{ textAlign: "justify"}}>
                          Desarrollamos capacidades críticas en inteligencia de negocios, análisis de datos y competencias laborales, impulsando un cambio sostenible donde el talento humano es el motor clave del éxito.
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
                        <p className="nosotros-card-text "style={{ textAlign: "justify"}}>{valor.descripcion}</p>
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
                        <p className="nosotros-card-text" style={{ textAlign: "justify"}}>{miembro.descripcion}</p>
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
                <img src={socio1}  className="nosotros-card-img" alt="Cliente 1" style={{ height: "20%", objectFit: "cover" }} />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="col-md-12">
                <img src={socio2}  className="nosotros-card-img" alt="Cliente 2" style={{ height: "20%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;