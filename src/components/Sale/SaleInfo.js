import React from 'react';

const SaleInfo = (props) => {
  return (
    <>
      <h1>{props.sale}</h1>
      <p>{props.saleName}</p>
      <hr></hr>
      <p>only {props.salePrice}</p>
    </>
  );
};

export default SaleInfo;
