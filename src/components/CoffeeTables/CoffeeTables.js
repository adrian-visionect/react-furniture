import React from 'react';
import './CoffeeTables.scss';
import './Product';
import Product from './Product';
import Table from '../../images/Table.png';
import GloboChair from '../../images/GloboChair.png';
import Armchair from '../../images/Armchair.png';
import Sofas from '../../images/Sofas.png';
const CoffeeTables = () => {
  return (
    <div className="container">
      <div className="items">
        <div className="table">
          <img src={Table} alt="table"></img>
          <div className="table-info">
            <Product cat="Clearence" name="Coffee Tables" price="from $19.99" />
          </div>
        </div>
        <div className="chair-white">
          <img src={GloboChair} alt="chair-white" />
          <div className="chair-white-info">
            <Product cat="Clearence" name="Coffee Tables" price="from $19.99" />
          </div>
        </div>
        <div className="rest">
          <div className="chair-yellow">
            <img src={Armchair} alt="chair-yellow" />
            <div className="chair-yellow-info">
              <Product
                cat="Clearence"
                name="Coffee Tables"
                price="from $19.99"
              />
            </div>
          </div>
          <div className="sofas">
            <img src={Sofas} alt="sofas" />
            <div className="sofas-info">
              <Product
                cat="Clearence"
                name="Coffee Tables"
                price="from $19.99"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeTables;
