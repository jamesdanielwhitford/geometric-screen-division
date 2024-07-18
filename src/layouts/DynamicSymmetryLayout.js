// src/layouts/DynamicSymmetryLayout.js
import React from 'react';
import './DynamicSymmetryLayout.css';

const DynamicSymmetryLayout = ({ rootType, subdivisions }) => {
  const getRootRatio = (type) => {
    switch (type) {
      case 'Root 2':
        return Math.sqrt(2);
      case 'Root 3':
        return Math.sqrt(3);
      case 'Root 4':
        return 2;
      default:
        return 1;
    }
  };

  const rootRatio = getRootRatio(rootType);
  const sectionHeight = 100 / subdivisions;

  return (
    <div className="dynamic-symmetry">
      {Array.from({ length: subdivisions }).map((_, index) => (
        <div
          key={index}
          className="dynamic-section"
          style={{
            height: `${sectionHeight}%`,
            width: `${sectionHeight * rootRatio}%`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default DynamicSymmetryLayout;
