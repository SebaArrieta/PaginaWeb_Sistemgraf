import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Blog.css"; 
import imagen from "./imagen.png";


import { getBlogs }  from "../repositorios/Conexión";
const Blogs = () => {
  const history = useNavigate ();
  const [Blogs, setBlogs] = useState([]);

  /* */
  useEffect(() => {
    const fetchServices = async () => {
        try {
            const data = await getBlogs();
            setBlogs(data || []); // Set an empty array as fallback
          } catch (error) {
            console.error("Error al obtener servicios:", error);
            setBlogs([]); // Prevent undefined state
          }
    };

    fetchServices();
  }, []);

  return (
<div className="container-new" style={{ paddingTop: '100px' }}>
      <div className="row">
        
        {Blogs.map((Blog, ID) => (
          <div key={ID} className="col-md-4 mb-4">
            <div className="card servicio-card-serv">
              <img src={Blog.Img} alt="Imagen del servicio" className="card-img-top servicio-img-serv" />
              <div className="card-body">
                <h5 className="card-title">{Blog.Name}</h5>
                <p className="card-text">
                  {Blog.Content.split("*").map((part, index) => (
                    <span key={index}>
                      {index > 0 && <br />}• {part.trim()}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;