import React, {useState} from "react";
import "./Contacto.css";
import ContactSection from "./ContactSection";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    // Validación básica en frontend
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setLoading(false);
      setSuccess("error");
      return alert("Todos los campos son obligatorios.");
    }

    try {
      const response = await fetch("http://localhost:5001/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        setSuccess("success");
        setFormData({ name: "", email: "", message: "" });
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
      <div className="container-new" style={{ paddingTop: '100px' }}>
        <div class="row">
          <div className="col-md-4 contact-form">
            <h3>¡Contactanos!</h3>
            <form>
                  <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="name" placeholder="Ingrese su nombre"/>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Ingrese su email"/>
                    </div>
                    <div class="mb-3">
                        <label for="website" class="form-label">Mi Sitio</label>
                        <input type="text" class="form-control" id="website" placeholder="Ingrese su sitio web"/>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Mensaje</label>
                        <textarea class="form-control" id="message" rows="3" placeholder="Ingrese su mensaje"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
          </div>
          <div className="col-md-8">
            <div id="map" style={{ backgroundColor: '#eaeaea' }}>
            <iframe frameborder="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.2296769233785!2d-71.43666299579252!3d-35.746665067634694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96658ed340a819d3%3A0x575bfb2cbe146faf!2sPuente%20Sta.%20Elena%2C%20Colb%C3%BAn%2C%20Maule!5e0!3m2!1ses!2scl!4v1739815346213!5m2!1ses!2scl" allowfullscreen="" style={{ height: "100%", width: "100%" }}></iframe>
            </div>
          </div>
        </div>
      </div>
      <ContactSection></ContactSection>

      </>
    );
  };
  
  export default ContactForm;
  