import React from 'react';
import './Slider.scss';
import { Chair } from './Chair';
import LongChair from '../../images/LongChair.png';
import ChairImg from '../../images/Chair.png';
import ButtonShopNow from '../Buttons/ButtonShopNow';
import Button from './Button';

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
              <p>
                from <span>{item.price}</span>
              </p>
              <ButtonShopNow name="Shop Now" />
              <div className="small-slider">
                <p>{item.collection}</p>
                <h5>{item.name}</h5>
                <img className="img-chair" alt="chair" src={ChairImg}></img>
                <div className="buttons">
                  <Button name="<" />
                  <Button name=">" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
