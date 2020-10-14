import React from 'react';
import './Architects.scss'
import ProductCard from './../ProductsList/ProductCard'
import picture1 from './../../images/picture1.png';
import picture2 from './../../images/picture2.png';
import picture3 from './../../images/picture3.png';


const Architects = () => {
    return ( 
        <div className="architects">
            <div className="arch">
            <div className="arch-container">
                <div className="arch-items">
                <ProductCard
            prodName="Depo Designs Woolrich Klettersack Backpack"
            cat="Chanel"
            price="$98"
            image={picture1}
            
          />
          <ProductCard
            prodName="Depo Designs Woolrich Klettersack Backpack"
            cat="Chanel"
            price="$98"
            image={picture2}
          />
          <ProductCard
            prodName="Depo Designs Woolrich Klettersack Backpack"
            cat="Chanel"
            price="$98"
            image={picture3}
          />
                </div>
                <div className="arch-info">
                    <h1>Architect</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
                    <button type="button" className="btn-ShopNowWhite">Shop Now</button>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Architects;