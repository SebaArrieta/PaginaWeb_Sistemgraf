import React from "react";
import "./Contacto.css";

const ContactForm = () => {
    return (
      <div className="container-new">
        <div class="row">
          <div className="col-md-4 contact-form">
            <h3>Formulary</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="text" className="form-control" id="location" placeholder="Enter location" />
              </div>
              <div className="mb-3">
                <label htmlFor="details" className="form-label">Details</label>
                <textarea className="form-control" id="details" rows="3" placeholder="Enter details"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-md-8">
          <h3 style={{ color: "white" }}>Map</h3>
            <div id="map" style={{ height: '400px', backgroundColor: '#eaeaea' }}>
            {/* Map will go here */}
            {/* Embed your map here, such as Google Maps, Leaflet, etc. */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactForm;
  