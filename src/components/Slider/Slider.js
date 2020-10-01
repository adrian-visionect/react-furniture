import React from 'react';
import './Slider.scss';
import { Chair } from './Chair';
import LongChair from '../../images/LongChair.png';
import ButtonShopNow from '../Buttons/ButtonShopNow';

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="long-chair">
        <>
          <img alt="chair" src={LongChair}></img>
        </>
      </div>
      <div className="slider-desc">
        {Chair.map((item, index) => {
          return (
            <div className="slider-info" key={index}>
              <p>{item.collection}</p>
              <h1>{item.name}</h1>
              <p>{item.price}</p>
              <ButtonShopNow value="Shop Now" name="Shop Now" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
