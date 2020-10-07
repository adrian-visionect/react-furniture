import React from 'react';

const ProductCard = (props) => {
  return (
    <div className="prod-card">
      <div className="div-upper">
        <img src={props.image} alt="prod" />
        <div className="prod-buttons">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div className="div-lower">
          <p>chanel</p>
          <h1>Depo Designs Woolrich Klettersack Backpack</h1>
          <p>price</p>
          <div className="stars">img</div>
          <div className="promotion"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
