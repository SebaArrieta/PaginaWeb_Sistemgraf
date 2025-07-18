import React from 'react';
import "./Tarjeta.css"
import DOMPurify from "dompurify";

const Tarjeta = ({ Titulo, Imagen, Texto, Boton, BotonUrl}) => {
    return (
        <article>
            <div class="article-wrapper">
            <figure>
                <img src={Imagen} alt="" />
            </figure>
            <div class="article-body">
                <h2>{Titulo}</h2>
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(Texto) }} />
                <button onClick={BotonUrl} className="read-more">
                    {Boton} <span className="sr-only">about this is some title</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            </div>
        </article>
    );
};

export default Tarjeta;