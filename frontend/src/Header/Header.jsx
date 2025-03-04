import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import "./Header.css";
import Logo from "./imagen/LogoBlanco.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <Navbar 
      expand="lg"                      // Se expande a "horizontal" a partir de lg
      variant="dark"   
      className='navbar-container fixed-top'           // Ajusta los colores de texto y toggler al modo "dark"
    >
      <div className="contenedor-navbar">
            {/* Marca (logo + texto) */}
            <Navbar.Brand as={Link} to="/sistemgraf/inicio" className="contenedor-img">
              <img
                  src={Logo}
                  className='logo img'
                  alt="Sistemgraf"
              />
            </Navbar.Brand>

            {/* Botón hamburguesa para pantallas pequeñas */}
            <Navbar.Toggle aria-controls="navbar-toggler">
                <FaBars />
            </Navbar.Toggle>


            {/* Links colapsables en pantallas pequeñas */}
            <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="contenedor-botones"> 
                <NavLink to="/sistemgraf/inicio" 
                  className={({ isActive }) => 
                    isActive ? "nav-links active-link filled-link" : "nav-links"
                  }
                  onClick={closeMenu} // Cierra el menú cuando se hace clic
                >
                Inicio
                </NavLink>
                <NavLink to="/sistemgraf/servicios" 
                  className={({ isActive }) => 
                    isActive ? "nav-links active-link filled-link" : "nav-links"
                  }
                  onClick={closeMenu} // Cierra el menú cuando se hace clic
                >
                    Servicios
                </NavLink>
                <NavLink to="/sistemgraf/blog" 
                  className={({ isActive }) => 
                    isActive ? "nav-links active-link filled-link" : "nav-links"
                  }
                  onClick={closeMenu} // Cierra el menú cuando se hace clic
                >
                    Blog
                </NavLink>
                <NavLink to="/sistemgraf/nosotros"                  
                className={({ isActive }) => 
                    isActive ? "nav-links active-link filled-link" : "nav-links"
                  }
                  onClick={closeMenu} // Cierra el menú cuando se hace clic
                >
                    Nosotros
                </NavLink>
            </Nav>


            <div className="social-container">
              {/* Íconos de Redes Sociales */}
              <div className="social-icons">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={24} />
                </a>
              </div>

              {/* Botón de Contacto */}
              <NavLink to="/sistemgraf/contact" className="contact-button" onClick={closeMenu}>
                Contactar
              </NavLink>
            </div>
            
            </Navbar.Collapse>
      </div>    
    </Navbar>
  );
}