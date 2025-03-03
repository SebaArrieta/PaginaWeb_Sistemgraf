import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DOMPurify from "dompurify";
import "./Contacto.css";

const ContactForm2 = () => {
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

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setLoading(false);
      setSuccess("error");
      return alert("Todos los campos son obligatorios.");
    }

    try {
      const response = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setLoading(false);

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
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ingrese su nombre"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingrese su email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="sitioweb" className="form-label">
              Mi Sitio
            </label>
            <input
              type="text"
              className="form-control"
              id="sitioweb"
              name="sitioweb"
              value={formData.sitioweb}
              onChange={handleChange}
              placeholder="Ingrese su sitio web"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="3"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ingrese su mensaje"
            ></textarea>
          </div>

          <button type="submit" className="btn-enviar" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </>
  );
};

export default ContactForm2;
