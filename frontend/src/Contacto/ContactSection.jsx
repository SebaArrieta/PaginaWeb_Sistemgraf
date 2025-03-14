import { useState } from "react";

const ContactSection = () => {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);

    setTimeout(() => {
      setCopied(null);
    }, 1500); // Cambia el color por 1 segundo
  };

  const contactData = [
    { id: 1, title: "NÚMERO DE TELÉFONO", value: "+56 9 31979188", link:"+56 9 31979188" },
    { id: 2, title: "E-MAIL", value: "contacto@sistemgraf.cl", link: "mailto:contacto@sistemgraf.cl" },
    { id: 3, title: "DIRECCIÓN OFICINA PRINCIPAL", value: "Sta. Elena, Colbún, Región Maule - Chile" },
    { id: 4, title: "Dirección Oficina Sucursal", value: "Diego de Almagro 2246, Providencia, Santiago, Región Metropolitana – Chile" },
  ];
 //Revisar linea 287 INICIO.CSS DEGRADADO COLOR
  return (
    <section className="contacts2" id="contacts2-2p">
      <div className="containe-newr">
        <div className="mbr-section-head text-center">
          <h3 className="mbr-section-title mb-3">
            <strong>Contactos</strong>
          </h3>
          <h4 className="mbr-section-subtitle">
            Nos puedes contactar también por aquí.
          </h4>
        </div>
        <div className="row mt-4">
          {contactData.map((contact) => (
            <div className="col-12 col-md-6 col-lg-3" key={contact.id}>
              <div
                className={`card contact-card h-100 ${copied === contact.id ? "copied" : ""}`}
                onClick={() => copyToClipboard(contact.value, contact.id)}
              >
                <div className="text-wrapper">
                  <h6 className="card-title">
                    <strong>{contact.title}</strong>
                  </h6>
                  <p>
                    {contact.link ? (
                      <a href={contact.link}>{contact.value}</a>
                    ) : (
                      contact.value
                    )}
                  </p>
                  {copied === contact.id && <span className="copy-message">Copiado</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;