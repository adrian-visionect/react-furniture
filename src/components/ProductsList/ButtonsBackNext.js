import React from 'react';

const ButtonBackNext = (props) => {
  return (
    <button type="button" className="btn-back-next">
      {props.btnName}
    </button>
  );
};

export default ButtonBackNext;
