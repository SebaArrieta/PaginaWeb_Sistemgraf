import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import "./Header.css";
import Logo from "./Logo.png";

export default function Header() {
  return (
    <Navbar 
      expand="lg"                      // Se expande a "horizontal" a partir de lg
      style={{ backgroundColor: "#181818" }} 
      variant="dark"   
      className='navbar-container'           // Ajusta los colores de texto y toggler al modo "dark"
    >
    
            {/* Marca (logo + texto) */}
            <Navbar.Brand as={Link} to="/inicio" className="ms-1">
            <img
                src={Logo}
                className='logo img'
                alt="Sistemgraf"
            />
            </Navbar.Brand>

            {/* Botón hamburguesa para pantallas pequeñas */}
            <Navbar.Toggle aria-controls="navbar-toggler" className="ms-auto">
                <FaBars />
            </Navbar.Toggle>


            {/* Links colapsables en pantallas pequeñas */}
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"> 
                <Nav.Link as={Link} to="/inicio" className="nav-links a">
                Inicio
                </Nav.Link>
                <Nav.Link as={Link} to="/servicio" className="me-2 text-white enlace-custom1">
                Servicios
                </Nav.Link>
                <Nav.Link as={Link} to="/blog" className="me-2 text-white enlace-custom1">
                Blog
                </Nav.Link>
                <Nav.Link as={Link} to="/nosotros" className="me-2 text-white enlace-custom1">
                Nosotros
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        
    </Navbar>
  );
}