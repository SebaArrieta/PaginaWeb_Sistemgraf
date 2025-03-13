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
          {/* Enlaces */}
          <div className="col-lg-4 col-md-6 text-start">
            <h5>Enlaces</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/sistemgraf/inicio" className="text-white">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/sistemgraf/servicios" className="text-white">Servicios</Nav.Link>
              <Nav.Link as={Link} to="/sistemgraf/blog" className="text-white">Blog</Nav.Link>
              <Nav.Link as={Link} to="/sistemgraf/nosotros" className="text-white">Nosotros</Nav.Link>
              <a 
                href="http://159.203.137.184:9000/" 
                className="nav-link text-white" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Intranet
              </a>
            </Nav>
          </div>
          
          {/* Mid Section: logo*/}
          <div className="col-lg-4 col-md-12 text-center"> 
          <Navbar.Brand className="logo-container">
            <Link to="/sistemgraf/inicio">
              <img src={Logo} className="logo-footer" alt="Sistemgraf" />
            </Link>
          </Navbar.Brand>
            <p>© 2025 Sistemgraf. Todos los derechos reservados.</p>
          </div>

          {/* Right section: Social Media Links */}
          <div className="col-lg-4 col-md-6 text-center">
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