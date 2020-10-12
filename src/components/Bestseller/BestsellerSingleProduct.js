import React from 'react';

const BestsellerSingleProduct = (props) => {
  return (
    <div className="bestseller-single-product">
      <div className="bs-items">
        <div className="bs-image">
          <img src={props.prodImage} alt="prod"></img>
        </div>
        <div className="bs-info">
          <h5>{props.prodName}</h5>
          <p>
            {props.prodPrice} <span>{props.span}</span>
          </p>
          <button type="button" className="btn-addToCart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestsellerSingleProduct;
