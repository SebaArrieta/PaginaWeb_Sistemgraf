import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";  
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Blog.css";
import Loading from "../components/Loading";
import AOS from "aos";

import { getBlogs }  from "../repositorios/Conexión";
const Blogs = () => {
  const [Blogs, setBlogs] = useState([]);
  const [isWide, setIsWide] = useState(window.innerWidth <= 1500);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchServices = async () => {
        try {
            const data = await getBlogs();
            console.log(data)
            setBlogs(data || []); // Set an empty array as fallback
            if (data.length === 0) {
              setLoading(false);
            }
          } catch (error) {
            console.error("Error al obtener servicios:", error);
            setBlogs([]); // Prevent undefined state
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
    if (imagesLoaded === Blogs.length && Blogs.length > 0) {
      setLoading(false);
    }
  }, [imagesLoaded, Blogs.length]);

  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <div className="container-new" style={{ paddingTop: '100px' }}>
      {loading && <Loading />} 
      <div className="row card-container">
        <h1 className="title-page">Blogs</h1>
        {Blogs.map((Blog, ID) => (
          <div key={ID} className={isWide ? "col-md-6 mb-4" : "col-md-4 mb-4"}>
            <div className="servicio-card" data-aos="fade-up">
              <div className="servicio-img-container">
                <img
                  src={Blog.Img}
                  alt="Imagen del blog"
                  className="servicio-img" 
                  loading="lazy"
                  onLoad={handleImageLoad}
                />
              </div>

              <div className="servicio-title-container">
                <h5 className="servicio-title">{Blog.Name}</h5>
              </div>
            
              <div className="servicio-texto">
                <p className="quill-content">
                  {truncateText(DOMPurify.sanitize(Blog.Description).replace(/<[^>]*>?/gm, ''), 365)}
                </p>
              </div>

              <div className="servicio-boton">
                <NavLink to={`/sistemgraf/blog/${Blog.ID}`} className="btn-mas-info">Leer más</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
  </div>
  );
};

export default Blogs;