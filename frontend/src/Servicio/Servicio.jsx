import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Servicio.css"; 
import { getServices } from "../repositorios/Conexión";
import DOMPurify from "dompurify";
import Loading from "../components/Loading";
import AOS from "aos";

const Servicios = () => {
  const history = useNavigate();
  const [servicios, setServicios] = useState([]);
  const [isWide, setIsWide] = useState(window.innerWidth <= 1500);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServicios(data || []);
        localStorage.setItem("servicios", JSON.stringify(data || []));
        setLoading(false); // Datos cargados desde API
      
      } catch (error) {
        console.error("Error al obtener servicios:", error);
        setServicios([]);
        setLoading(false);
      }
    };

    fetchServices();
    AOS.init({ duration: 1000 });
    const handleResize = () => {
      setIsWide(window.innerWidth <= 1500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === servicios.length && servicios.length > 0) {
      setLoading(false);
    }
  }, [imagesLoaded, servicios.length]);

  const handleContactClick = (servicioName) => {
    const message = `Deseo saber más sobre los detalles de ${servicioName}`;
    history(`/sistemgraf/contact?message=${encodeURIComponent(message)}.`);
  };

  return (
    <div className="container-new" style={{ paddingTop: '100px' }}>
      {loading && <Loading />} 

      <div className="row justify-content-center card-container">
        <h1 className="title-page" style={{ marginBottom: '-35px' }}>Nuestros Servicios para Potenciar tu Negocio</h1>
        {servicios.map((servicio) => {
          return (
            <div key={servicio.ID} className={isWide ? "col-md-6 mb-4" : "col-md-4 mb-4"}>
              <div className="servicio-card custom-servicio-card" data-aos="fade-up">
                <div className="servicio-img-container">
                  <img
                    src={servicio.Img}
                    alt="Imagen del blog"
                    className="servicio-img" 
                    loading="lazy"
                    onLoad={handleImageLoad} // Track image load
                  />
                </div>

                <div className="servicio-title-container">
                  <h5 className="servicio-title">{servicio.Name}</h5>
                </div>
              
                <div className="servicio-texto">
                  <div className="quill-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(servicio.Content) }} />
                </div>

                <div className="servicio-boton">
                  <button 
                    className="btn-mas-info"
                    onClick={() => handleContactClick(servicio.Name)}
                  >
                      Contáctenos
                  </button>
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