// src/layouts/RuleOfThirdsLayout.js
import React from 'react';
import './RuleOfThirdsLayout.css';

const RuleOfThirdsLayout = () => {
  return (
    <div className="rule-of-thirds">
      <div className="grid-line horizontal-line line1"></div>
      <div className="grid-line horizontal-line line2"></div>
      <div className="grid-line vertical-line line1"></div>
      <div className="grid-line vertical-line line2"></div>
    </div>
  );
};

export default RuleOfThirdsLayout;
