import React from 'react';
import './ButtonShopNow.scss';

const ButtonShopNow = (props) => {
  return (
    <button className="btn-ShopNow" type="button">
      {props.name}
    </button>
  );
};

export default ButtonShopNow;
