import React from 'react';

const Contact = (props) => {
  return (
    <div className="contact-item">
      <h1>{props.title}</h1>
      <h2>{props.first}</h2>
      <h2>{props.second}</h2>
      <h2>{props.third}</h2>
      <h2>{props.fourth}</h2>
    </div>
  );
};

export default Contact;
