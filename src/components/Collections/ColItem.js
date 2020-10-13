import React from 'react';

const ColItem = (props) => {
    return ( 
        <div className="col-item">
            <img src={props.colImg} alt='col-img'></img>
            <div className="col-info">
                <p>{props.colName}</p>
                <h1>{props.colTitle}</h1>
                <button type="button" className="btn-ShopNowWhite">Shop Now</button>
            </div>
        </div>
     );
}

export default ColItem;
