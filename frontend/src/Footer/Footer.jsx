import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "./Header.css";
import Logo from "./Logo.png";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#181818", color: "#fff", padding: "20px 0" }}>
      {/* Footer Container */}
      <div className="container">
        <div className="row">
          {/* Left section: Logo + Text */}
          <div className="col-lg-4 col-md-6">
            <Navbar.Brand as={Link} to="/inicio" className="ms-1">
              <img
                src={Logo}
                className='logo img'
                alt="Sistemgraf"
                style={{ maxHeight: '50px' }}
              />
            </Navbar.Brand>
            <p>© 2025 Sistemgraf. Todos los derechos reservados.</p>
          </div>

          {/* Middle section: Links */}
          <div className="col-lg-4 col-md-6">
            <h5>Enlaces</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/inicio" className="text-white">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/" className="text-white">Servicios</Nav.Link>
              <Nav.Link as={Link} to="/" className="text-white">Blog</Nav.Link>
              <Nav.Link as={Link} to="/" className="text-white">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white">Contacto</Nav.Link>
            </Nav>
          </div>

          {/* Right section: Social Media Links */}
          <div className="col-lg-4 col-md-6">
            <h5>Síguenos</h5>
            <div className="social-links">
              <a href="https://facebook.com" className="text-white me-2"><FaFacebook size={24} /></a>
              <a href="https://twitter.com" className="text-white me-2"><FaTwitter size={24} /></a>
              <a href="https://instagram.com" className="text-white me-2"><FaInstagram size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}