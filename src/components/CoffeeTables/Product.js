import React from 'react';

const Product = (props) => {
  return (
    <div className="product-info">
      <p>{props.cat}</p>
      <h1>{props.name}</h1>
      <h5>{props.price}</h5>
      <button className="btn-ShopNowWhite" type="button">
        Shop Now
      </button>
    </div>
  );
};

export default Product;
