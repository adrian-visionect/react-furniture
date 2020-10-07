import React from 'react';
import './ProductsList.scss';
import CategoriesButton from './Categories/CategoriesButton';
import './ButtonsBackNext';
import ButtonBackNext from './ButtonsBackNext';
import ProductCard from './ProductCard';
import picture1 from './../../images/picture1.png';
import picture2 from './../../images/picture2.png';
import picture3 from './../../images/picture3.png';
import picture4 from './../../images/picture4.png';

const ProductsList = () => {
  return (
    <div className="products-list">
      <div className="products-list-container">
        <div className="categories">
          <CategoriesButton name="Furtniture" />
          <CategoriesButton name="Lighting" />
          <CategoriesButton name="Sofas" />
          <CategoriesButton name="Lounge chairs" />
          <CategoriesButton name="All" />
        </div>
        <div className="btn-bn">
          <ButtonBackNext btnName="Back" />
          <ButtonBackNext btnName="Next" />
        </div>
        <div className="prod-items">
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
          <ProductCard
            prodName="Depo Designs Woolrich Klettersack Backpack"
            cat="Chanel"
            price="$98"
            image={picture4}
          />
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
          <ProductCard
            prodName="Depo Designs Woolrich Klettersack Backpack"
            cat="Chanel"
            price="$98"
            image={picture4}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
