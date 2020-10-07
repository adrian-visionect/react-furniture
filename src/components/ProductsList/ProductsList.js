import React from 'react';
import './ProductsList.scss';
import CategoriesButton from './Categories/CategoriesButton';
import './ButtonsBackNext';
import ButtonBackNext from './ButtonsBackNext';
import ProductCard from './ProductCard';
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
