import React from 'react';
import './Bestseller.scss';
import BestsellerProducts from './BestsellerProducts';
import NavItem from './NavItem';

const Bestseller = () => {
  return (
    <div className="bestseller">
      <div className="bestseller-container">
        <div className="bestseller-nav-items">
          <div className="bestseller-nav">
            <NavItem navName="Best Seller" />
          </div>
          <div className="newarrival-nav">
            <NavItem navName="Newa Arrival" />
          </div>
          <div className="Featured">
            <NavItem navName="Featured" />
          </div>
        </div>
        <div className="bestseller-products">
          <BestsellerProducts />
        </div>
      </div>
    </div>
  );
};

export default Bestseller;
