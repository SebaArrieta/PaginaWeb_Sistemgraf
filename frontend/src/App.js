import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { useEffect } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp"; // Importa la librería

import ContactForm from './Contacto/Contacto';
import Inicio from './Inicio/Inicio';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import Nosotros from './nosotros/nosotros';
import Servicios from './Servicio/Servicio';
import Blogs from './Blog/Blog';
import BlogDetail from './Blog/BlogDetail/BlogDetail'
function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://w.app/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Router> 
      
    <div className="App">

      <Header />
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Navigate to="/inicio" replace />} />
          <Route path="/inicio" element={<Inicio/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/servicios" element={<Servicios/>} />
          <Route path="/blog" element={<Blogs/>} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          {/* Rutas protegidas */}

        </Routes>
      <Footer />

      
      <FloatingWhatsApp
          phoneNumber="56931979188"  // Número de WhatsApp sin el '+'
          accountName="Soporte Sistemgraf"
          chatMessage="¡Hola! ¿En qué puedo ayudarte?"
          statusMessage="Responde en unos minutos"
          avatar="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          allowClickAway
          notification
          notificationSound
      />
  </div>
  </Router>
  );
}

export default App;
