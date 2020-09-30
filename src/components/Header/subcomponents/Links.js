import React from 'react';

const Links = () => {
  return (
    <div>
      <ul className="header-links">
        <li>
          <i className="fa fa-heart"></i>
          <a href="#/"> Which List </a>
        </li>
        <li>
          <a href="#/" className="header-circle">
            <i className="fa fa-circle"></i>
          </a>
        </li>
        <li>
          <a href="#/">About us</a>
        </li>
        <li>
          <a href="#/" className="header-circle">
            <i className="fa fa-circle"></i>
          </a>
        </li>
        <li>
          <a href="#/"> Contact US</a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
