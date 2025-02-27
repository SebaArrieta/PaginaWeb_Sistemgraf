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
      className='navbar-container fixed-top'           // Ajusta los colores de texto y toggler al modo "dark"
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
                <NavLink to="/inicio" 
                  className={({ isActive }) => 
                    isActive ? "nav-links active-link filled-link" : "nav-links"
                  }
                >
                Inicio
                </NavLink>
                <NavLink to="/servicios" 
                  className={({ isActive }) => 
                    isActive ? "nav-links active-link filled-link" : "nav-links"
                  }
                >
                    Servicios
                </NavLink>
                <NavLink to="/blog" 
                  className={({ isActive }) => 
                    isActive ? "nav-links active-link filled-link" : "nav-links"
                  }
                >
                    Blog
                </NavLink>
                <NavLink to="/nosotros"                  
                className={({ isActive }) => 
                    isActive ? "nav-links active-link filled-link" : "nav-links"
                  }
                >
                    Sobre Sistemgraf
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => 
                    isActive ? "nav-links active-link filled-link" : "nav-links"
                  }
                >
                  Contacto
                </NavLink>
            </Nav>
            </Navbar.Collapse>
        
    </Navbar>
  );
}