import React from 'react';
import ProductButton from './ProductButton';
import stars from './../../images/star.png';
const ProductCard = (props) => {
  return (
    <div className="prod-card">
      <div className="div-upper">
        <img className="prod-img" src={props.image} alt="prod" />
        <div className="prod-buttons">
          <ProductButton btnName="  ADD TO CART" icon="fa fa-shopping-cart" />
          <ProductButton icon="fa fa-search" />
          <ProductButton icon="fa fa-heart" />
          <ProductButton icon="fa fa-exchange" />
        </div>
      </div>
      <div className="div-lower">
        <div className="promotion">20%</div>
        <p>{props.cat}</p>
        <h1>{props.prodName}</h1>
        <p>{props.price}</p>
        <div className="stars">
          <img src={stars} alt="stars"></img>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
