import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footercontainer">
        <div className="footermaincontentlist">
          <div className="footermain">
            <h6>About</h6>
            <div className="footercarrerlist">
              <ul>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Carrers</li>
                <li>Corporate Information</li>
              </ul>
            </div>
          </div>
          <div className="footermain-group">
            <h6>Group Companies</h6>
            <div className="footercarrerlist">
              <ul>
                <li>Myntra</li>
                <li>Cleartrip</li>
                <li>Shopsy</li>
              </ul>
            </div>
          </div>
          <div className="footermain-help">
            <h6>Help</h6>
            <div className="footercarrerlist">
              <ul>
                <li>Payment</li>
                <li>Shipping</li>
                <li>Cancelation & Return</li>
              </ul>
            </div>
          </div>
          <div className="footermain-consumer">
            <h6>Consumer Policy</h6>
            <div className="footercarrerlist">
              <ul>
                <li>Cancelation & Returns</li>
                <li>Security</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
        </div>
      <div className="footerbottomcontainer">
        <div className="footertitle">
        <h6>2020 - 2024 Electronic Store</h6>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;
