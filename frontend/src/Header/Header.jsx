import React from 'react';
import { Link, NavLink } from 'react-router';
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
                <NavLink to="/inicio" className="nav-links" activeClassName="active-link">
                Inicio
                </NavLink>
                <NavLink to="/servicios" className="nav-links" activeClassName="active-link">
                    Servicios
                </NavLink>
                <NavLink to="/blog" className="nav-links" activeClassName="active-link">
                    Blog
                </NavLink>
                <NavLink to="/nosotros" className="nav-links" activeClassName="active-link">
                    Nosotros
                </NavLink>
                <NavLink to="/contact" className="me-2 text-warning enlace-custom1">
                Contacto
                </NavLink>
            </Nav>
            </Navbar.Collapse>
        
    </Navbar>
  );
}