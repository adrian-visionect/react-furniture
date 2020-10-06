import React, { useState } from 'react';

function Categories(props) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <button
      className={isActive ? 'btn-categories-active' : 'btn-categories'}
      type="button"
      onClick={toggleClass}
    >
      {props.name}
    </button>
  );
}

export default Categories;
