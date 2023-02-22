import React from "react";
import "./main-contact.css";

function MainContact() {
    return (
        <div className="container">
        <header className="topic">
          <h1 className="heading-topic">Contact Us</h1>
        </header>
        <div className="contact">
          <div className="row">
            <div className="person">
              <div className="image">
                <img
                  className="cover-image"
                />
              </div>
              <div className="information">
                <div className="name">
                  <h1 className="text">Silmee Panan</h1>
                </div>
                <div className="other">
                  <span>6510110116</span>
                </div>
              </div>
              <div className="button"></div>
            </div>
          </div>
        </div>
      </div>
     );
}

export default MainContact;
