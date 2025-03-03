import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import "./Footer.css";
import Logo from "../Header/imagen/LogoBlanco.png"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#181818", color: "#fff", padding: "20px 0" }}>
      {/* Footer Container */}
      <div className="container">
        <div className="row">
          {/* Middle section: Links */}
          <div className="col-lg-4 col-md-6 text-start">
            <h5>Enlaces</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/inicio" className="text-white">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/servicios" className="text-white">Servicios</Nav.Link>
              <Nav.Link as={Link} to="/blog" className="text-white">Blog</Nav.Link>
              <Nav.Link as={Link} to="/nosotros" className="text-white">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/intranet" className="text-white">Intranet</Nav.Link> 
            </Nav>
          </div>

          {/* Left section: Logo + Text */}
          <div className="col-lg-4 col-md-12 text-center"> 
            <Navbar.Brand as={Link} to="/inicio">
              <img
                src={Logo}
                className='logo-footer'
                alt="Sistemgraf"
              />
            </Navbar.Brand>
            <p>© 2025 Sistemgraf. Todos los derechos reservados.</p>
          </div>

          {/* Right section: Social Media Links */}
          <div className="col-lg-4 col-md-6 text-end">
            <h5>Síguenos</h5>
            <div className="social-links">
              <a href="https://www.linkedin.com" className="text-white me-2"><FaLinkedin size={24} /></a>
              <a href="https://www.instagram.com" className="text-white me-2"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}