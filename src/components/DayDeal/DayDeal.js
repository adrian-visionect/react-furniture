import React from 'react';
import './DayDeal.scss'
import Clock from './Clock'
import ButtonShopNow from '../Buttons/ButtonShopNow';
import dealChair from '../../images/dealChair.png'

const DayDeal = () => {
    return ( 
        <div className="day-deal">
            <div className="day-deal-container">
                <div className="deal-info">
                    <p>Limited Quantities</p>
                    <h1>Deal of the Day</h1>
                    <h2>Original Outdoor Beanbag</h2>
                    <h3>$149.00 <span className="price-span">$250</span></h3>
                    <Clock />
                <ButtonShopNow name="Buy Now"/>
                </div>
                <div className="deal-image">
                    <img src={dealChair} alt="chair"/>
                </div>
            </div>
        </div>
     );
}
 
export default DayDeal;