import React from 'react';
import ColItem from './ColItem';
import './Collections.scss'
import yellowCol from '../../images/yellowCol.png';
import barstool from '../../images/Barstool.png'
import chairCol from '../../images/chairCol.png'

const Collections = () => {
    return ( 
        <div className="collections">
            <div className="col-buttons">
            </div>
            <div className="col-container">
                <ColItem colImg={yellowCol} colName="New Year Special" colTitle="Big Sale 50% Off" />
                <ColItem colImg={barstool} colName="#New Arrivals" colTitle="Suitable Wood Tool" />
                <ColItem colImg={chairCol} colName="#Hot Collections" colTitle="Wood Rubber Chair" />
            </div>
        </div>
     );
}
 
export default Collections;