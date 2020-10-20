import React from 'react';
import Contact from './Contact';
import './Informations.scss';
const Informations = () => {
  return (
    <div className="informations">
      <div className="informations-container">
        <div className="mart-info">
          <h1>Dev Furniture Mart</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo du
          </p>
        </div>
        <div className="contact">
          <Contact
            title="Customer Service"
            first="Help & Contact Us"
            second="Returns & Refunds"
            third="Online Stores"
            fourth="Terms & Conditions"
          />
          <Contact
            title="Company"
            first="What We Do"
            second="Available Services"
            third="Lastest Posts"
            fourth="FAQs"
          />
          <Contact
            title="Social Media"
            first="Twitter"
            second="Facebook"
            third="Linkedin"
            fourth="Pinterest"
          />
          <Contact
            title="Profile"
            first="My Account"
            second="Checkout"
            third="Order Tracking"
            fourth="Help & Support"
          />
        </div>
      </div>
    </div>
  );
};

export default Informations;
