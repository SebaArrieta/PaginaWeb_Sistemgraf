import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./BlogDetail.css"; 
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";


import { getBlog }  from "../../repositorios/Conexión";

const Blogs = () => {
  const history = useNavigate ();
  const [Blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { id } = useParams();

  /* */
  useEffect(() => {
    const fetchBlog = async () => {
        try {
            const data = await getBlog(id);
            console.log(data)
            setBlog(data[0] || {}); // Set an empty array as fallback
            setLoading(false);
          } catch (error) {
            console.error("Error al obtener servicios:", error);
            setBlog({}); // Prevent undefined state
            setLoading(false);
          }
    };

    fetchBlog();
  }, [id]);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (imagesLoaded === 1 && Object.keys(Blog).length === 0) {
      setLoading(false);
    }
  }, [imagesLoaded, Object.keys(Blog).length]);

  return (
    <div className="container-new blog-page" style={{ paddingTop: '100px' }}>
        {loading && <Loading />} 
        <h1 style = {{color: "#ffffff"}}>{Blog.Name}</h1>
        <img src={Blog.Img} alt="Imagen del servicio" className="blog-img" style = {{maxHeight: "700px"}} onLoad={handleImageLoad}/>
        <div className="quill-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(Blog.Description) }} style = {{margin: "20px 0px", color: "#ffffff"}}/>
        <div className="quill-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(Blog.Content) }} style = {{color: "#ffffff"}}/>
    </div>
  );
};

export default Blogs;