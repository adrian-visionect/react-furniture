import React from 'react';

const RulesItem = (props) => {
  return (
    <div className="item">
      <p>
        <i className={props.icon}></i>
      </p>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </div>
  );
};

export default RulesItem;
