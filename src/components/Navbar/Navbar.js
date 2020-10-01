import React from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <h1 className="nav-logo">Dev Furniture Mart</h1>
      <div className="nav-menu">
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="nav-func">
        <div className="search">
          <i className="fa fa-search"></i>
          <a href="#/">Search</a>
        </div>
        <div className="account">
          <i className="fa fa-user"></i>
          <a href="#/">Account</a>
        </div>
        <div className="cart">
          <i className="fa fa-shopping-cart"></i>
          <a href="#/">Cart</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
