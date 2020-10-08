import React from 'react';
import SaleInfo from './SaleInfo';
import whiteChair from '../../images/whiteChair.png';
import './Sale.scss';
import ButtonShopNow from '../Buttons/ButtonShopNow';

const Sale = () => {
  return (
    <div className="sale">
      <div className="sale-container">
        <div className="sale-info">
          <SaleInfo
            sale="30% off"
            saleName="Midcentury Modern Occasional Chair"
            salePrice="$309.99"
          />
          <ButtonShopNow name="Shop Now" />
        </div>
        <img src={whiteChair} alt="white-chair"></img>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Sale;
