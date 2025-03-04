import React, {useState, useEffect} from "react";
import {useLocation} from "react-router"
import "./Contacto.css";
import { sendEmail } from "../repositorios/Conexión";
import ContactSection from "./ContactSection";
import DOMPurify from "dompurify";

//Contact
const ContactForm = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialMessage = DOMPurify.sanitize(params.get("message") || "");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: initialMessage,
    sitioweb: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    console.log(formData)
    // Validación básica en frontend
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setLoading(false);
      setSuccess("error");
      return alert("Todos los campos son obligatorios.");
    }

    try {
      const response = sendEmail(formData)

      const result = await response.json();
      setLoading(false);
      console.log(result)
      if (response.ok) {
        setSuccess("success");
        setFormData({ name: "", email: "", sitioweb: "", message: "" });
      } else {
        setSuccess("error");
      }
    } catch (error) {
      setLoading(false);
      setSuccess("error");
    }
  };

    return (
      <>
      <div className="container-new" style={{ paddingTop: '100px', width: '100%' }}>
        <div class="row">
          <div className="col-md-4 contact-form">
            <h3>¡Contactanos!</h3>
            <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="name" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                            placeholder="Ingrese su nombre"/>
                  </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        
                        <input type="email" class="form-control" id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ingrese su email"/>
                    </div>
                    <div class="mb-3">
                        <label for="website" class="form-label">Mi Sitio</label>
                        <input type="text" class="form-control" id="sitioweb" 
                        name="sitioweb"
                        value={formData.sitioweb}
                        onChange={handleChange}
                        placeholder="Ingrese su sitio web"/>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Mensaje</label>
                        <textarea class="form-control" id="message" rows="3" 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Ingrese su mensaje"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
          <div className="col-md-8">
            <div id="map" style={{ backgroundColor: '#eaeaea' }}>
            <iframe frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.2296769233785!2d-71.43666299579252!3d-35.746665067634694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96658ed340a819d3%3A0x575bfb2cbe146faf!2sPuente%20Sta.%20Elena%2C%20Colb%C3%BAn%2C%20Maule!5e0!3m2!1ses!2scl!4v1739815346213!5m2!1ses!2scl" 
             allowfullscreen="" style={{ height: "100%", width: "100%" }}>

             </iframe>
            </div>
          </div>
        </div>
      </div>
      <ContactSection></ContactSection>

      </>
    );
  };
  
  export default ContactForm;
  