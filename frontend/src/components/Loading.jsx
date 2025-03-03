import React from 'react';
import "./Loading.css"
import Logo from "./imagen/Amarillo.png";

const Loading = ({ message }) => {
    return (
        <div 
            className="d-flex flex-column justify-content-center align-items-center" 
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100vw', 
                height: '100vh', 
                backgroundColor: '#006084', // Fondo oscuro con opacidad
                zIndex: 9999 // Asegura que esté por encima de todo el contenido
            }}
        >
            <img
                  src={Logo}
                  className='img-loader'
                  alt="Sistemgraf"
              />
            <div class="loader"></div>
        </div>
    );
};

export default Loading;