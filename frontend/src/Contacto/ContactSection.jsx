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
    { id: 1, title: "NÚMERO DE TELÉFONO", value: "+56 9 31979188" },
    { id: 2, title: "E-MAIL", value: "contacto@sistemgraf.cl", link: "mailto:contacto@sistemgraf.cl" },
    { id: 3, title: "DIRECCIÓN OFICINA PRINCIPAL", value: "Sta. Elena, Colbún, Región Maule - Chile" },
    { id: 4, title: "Dirección Oficina Sucursal", value: "Diego de Almagro 2246, Providencia, Santiago, Región Metropolitana – Chile" },
  ];

  return (
    <section className="contacts2" id="contacts2-2p">
      <div className="container">
        <div className="mbr-section-head text-center">
          <h3 className="mbr-section-title mb-3 display-2">
            <strong>Contactos</strong>
          </h3>
          <h4 className="mbr-section-subtitle display-7">
            Nos puedes contactar también por aquí.
          </h4>
        </div>
        <div className="row justify-content-center mt-4">
          {contactData.map((contact) => (
            <div className="col-12 col-md-6" key={contact.id}>
              <div
                className={`card contact-card ${copied === contact.id ? "copied" : ""}`}
                onClick={() => copyToClipboard(contact.value, contact.id)}
              >
                <div className="text-wrapper">
                  <h6 className="card-title display-5">
                    <strong>{contact.title}</strong>
                  </h6>
                  <p className="display-7">
                    {contact.link ? (
                      <a href={contact.link} className="text-primary">{contact.value}</a>
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