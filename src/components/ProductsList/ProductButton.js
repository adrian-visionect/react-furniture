import React from 'react';

const ProductButton = (props) => {
  return (
    <button type="button" className="prod-btn">
      <i className={props.icon}></i>
      {props.btnName}
    </button>
  );
};

export default ProductButton;
