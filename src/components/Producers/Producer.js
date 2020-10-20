import React from 'react';

const Producer = (props) => {
  return (
    <div className="producer-item">
      <img src={props.logo} alt="prod" />
    </div>
  );
};

export default Producer;
