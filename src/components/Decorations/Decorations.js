import React from 'react';
import './Decorations.scss'
import ProductCard from './../ProductsList/ProductCard'
import picture1 from './../../images/picture1.png';
import picture2 from './../../images/picture2.png';
import picture3 from './../../images/picture3.png';
import picture4 from './../../images/picture4.png';

const Decorations = () => {
    return ( 
        <div className="decorations">
            <div className="dec">
            <div className="dec-container">
                <div className="dec-info">
                    <h1>Decoration</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
                    <button type="button" className="btn-ShopNowWhite">Shop Now</button>
                </div>
                <div className="dec-items">
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
                </div>
            </div>
        </div>
     );
}
 
export default Decorations;