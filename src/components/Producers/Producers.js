import React from 'react';
import Producer from './Producer';
import './Producers.scss';
import prod1 from './../../images/prod1.png';
import prod2 from './../../images/prod2.png';
import prod3 from './../../images/prod3.png';
import prod4 from './../../images/prod4.png';
import prod5 from './../../images/prod5.png';

const Producers = () => {
  return (
    <div className="producers">
      <div className="producers-container">
        <Producer logo={prod1} />
        <Producer logo={prod2} />
        <Producer logo={prod3} />
        <Producer logo={prod4} />
        <Producer logo={prod5} />
      </div>
    </div>
  );
};

export default Producers;
