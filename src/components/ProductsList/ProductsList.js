import React from 'react';
import './ProductsList.scss';
import CategoriesButton from './Categories/CategoriesButton';
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
      </div>
    </div>
  );
};

export default ProductsList;
