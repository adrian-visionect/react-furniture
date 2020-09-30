import React from 'react';
import './Header.scss';
import Info from './subcomponents/Info';
import Links from './subcomponents/Links';

const Header = () => {
  return (
    <div className="header">
      <Info />
      <Links />
    </div>
  );
};

export default Header;
