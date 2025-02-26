import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./nosotros.css"; 
import imagen from "./images.jpg";
import cliente1 from "./Bsolutions.png"; 
import cliente2 from "./strategy.png";

const Nosotros = () => {
  const [servicios, setServicios] = useState([
    { titulo: "Excelencia", descripcion: "Compromiso con la excelencia en todos los aspectos de nuestros servicios y soluciones." },
    { titulo: "Innovación", descripcion: "Fomentar la innovación constante para mantenernos a la vanguardia de la tecnología y las mejores prácticas." },
    { titulo: "Colaboración", descripcion: "Trabajar en estrecha colaboración con nuestros clientes para alcanzar objetivos compartidos." },
    { titulo: "Empoderamiento", descripcion: "Empoderar a las organizaciones y a sus talentos humanos para alcanzar objetivos compartidos." },
    { titulo: "Ética", descripcion: "Actuar con integridad y ética en todas nuestras interacciones y decisiones." },
    { titulo: "Orientación al Cliente", descripcion: "Poner siempre las necesidades y metas de nuestros clientes en el centro de nuestras acciones." },
    { titulo: "Sostenibilidad", descripcion: "Abogar por prácticas comerciales sostenibles y responsables." },
    { titulo: "Adaptabilidad", descripcion: "Ser ágiles y adaptarnos a los cambios del entorno empresarial y tecnológico." },
  ]);

  const [equipo, setEquipo] = useState([
    { nombre: "Mauricio Olivares", rango: "Director", descripcion: "Descripcion" },
    { nombre: "Fernolds Alvarado", rango: "Jefe de Proyectos", descripcion: "Descripcion" },
    // Agrega más miembros del equipo según sea necesario
  ]);

  const handleInputChange = (index, field, value) => {
    const newServicios = [...servicios];
    newServicios[index][field] = value;
    setServicios(newServicios);
  };

  return (
    <div>
      {/* Contenedor de ancho completo para la sección principal, misión y visión */}
      <div className="full-width-container bg-darkblue text-white">
        <div className="container">
          <h1 className="title">Sobre Sistemgraf</h1>

          {/* Sección principal con imagen y texto */}
          <div className="content d-flex align-items-center justify-content-center">
            <div className="text">
              <p>
                Somos Sistemgraf: inteligencia integrada para Recursos Humanos y procesos de negocio. Fundada en 2018, nuestra misión es transformar la forma en que las organizaciones gestionan su capital humano y toman decisiones estratégicas con el valor de los datos. Con un equipo de expertos apasionados por la innovación, destacamos en el uso de Inteligencia Artificial, Business Intelligence y Analytics para impulsar el éxito empresarial.
              </p>
            </div>
            <div className="image">
              <img src={imagen} alt="Descripción" />
            </div>
          </div>

          {/* Tarjeta de Misión */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card" style={{ backgroundColor: "#C0C0C0", height: "350px" }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={imagen} className="card-img" alt="Misión" style={{ height: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title"><strong>Misión</strong></h5>
                      <p className="card-text">
                        Empoderar a las áreas de Recursos Humanos mediante el uso estratégico de datos integrados y una visión 360° del capital humano, apalancados en modelos de inteligencia de negocios, inteligencia artificial y análisis estadístico avanzado. Nuestro objetivo es facilitar la toma de decisiones con menor riesgo, garantizando un proceso de mejora continua en las organizaciones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta de Visión */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="card" style={{ backgroundColor: "#C0C0C0", height: "350px" }}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={imagen} className="card-img" alt="Visión" style={{ height: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title"><strong>Visión</strong></h5>
                      <p className="card-text">
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

      {/* Contenedor de ancho completo para "Nuestros Servicios" */}
      <div className="full-width-container bg-lightblue text-black">
        <div className="container">
          <h2 className="title servicios-title">Nuestros Valores</h2>
          <div className="row">
            {servicios.map((servicio, index) => (
              <div className="col-12 mb-4" key={index}>
                <div className="card custom-service-card" style={{ backgroundColor: "#C0C0C0" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={imagen} className="card-img" alt={`Servicio ${index + 1}`} style={{ height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <input
                          type="text"
                          className="form-control mb-2"
                          value={servicio.titulo}
                          onChange={(e) => handleInputChange(index, "titulo", e.target.value)}
                        />
                        <textarea
                          className="form-control"
                          value={servicio.descripcion}
                          onChange={(e) => handleInputChange(index, "descripcion", e.target.value)}
                        />
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
        <div className="container">
          <h1 className="title">Nuestro Equipo</h1>
          <div className="row">
            {equipo.map((miembro, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card" style={{ backgroundColor: "#C0C0C0" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={imagen} className="card-img" alt={`Miembro ${index + 1}`} style={{ height: "100%", objectFit: "cover" }} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title"><strong>{miembro.nombre}</strong></h5>
                        <h6 className="card-subtitle mb-2 text-muted">{miembro.rango}</h6>
                        <p className="card-text">{miembro.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contenedor de ancho completo para "Nuestros Clientes" */}
      <div className="full-width-container bg-lightblue text-black">
        <div className="container">
          <h2 className="title servicios-title">Nuestros Clientes</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="col-md-12">
                <img src={cliente1} className="card-img" alt="Cliente 1" style={{ height: "100%", objectFit: "cover" }} />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="col-md-12">
                <img src={cliente2} className="card-img" alt="Cliente 2" style={{ height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Nosotros;
