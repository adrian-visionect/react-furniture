import React from 'react';
import ButtonBackNext from './../ProductsList/ButtonsBackNext';

const NavItem = (props) => {
  return (
    <>
      <div className="nav-item">
        <p>{props.navName}</p>
        <ButtonBackNext btnName="Back" />
        <ButtonBackNext btnName="Next" />
      </div>
      <hr></hr>
    </>
  );
};

export default NavItem;
