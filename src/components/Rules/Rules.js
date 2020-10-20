import React from 'react';
import './Rules.scss';
import RulesItem from './RulesItem';
const Rules = () => {
  return (
    <div className="rules">
      <div className="rules-container">
        <RulesItem
          icon="fa fa-truck"
          title="Free Shipping Order"
          desc="On orders over $100"
        />
        <RulesItem
          icon="fa fa-gift"
          title="Special Gift Card"
          desc="The perfecr gift idea"
        />
        <RulesItem
          icon="fa fa-undo"
          title="Return & Refund"
          desc="Free return within 3 days"
        />
        <RulesItem
          icon="fa fa-life-ring"
          title="Quality Support"
          desc="Free return within 3 days"
        />
      </div>
    </div>
  );
};

export default Rules;
