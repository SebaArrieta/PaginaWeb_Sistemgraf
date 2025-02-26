import logo from './logo.svg';

import { BrowserRouter as Router, Routes, Route } from "react-router";

import ContactForm from './Contacto/Contacto';
import Inicio from './Inicio/Inicio';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import Nosotros from './nosotros/nosotros';
import Servicios from './Servicio/Servicio';
function App() {
  return (
    <Router> 
      
    <div className="App">
      <Header />
        <Routes>
          {/* Rutas públicas */}
          <Route path="/inicio" element={<Inicio/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/servicios" element={<Servicios/>} />
          {/* Rutas protegidas */}

        </Routes>
      <Footer />
  </div>
  </Router>
  );
}

export default App;
