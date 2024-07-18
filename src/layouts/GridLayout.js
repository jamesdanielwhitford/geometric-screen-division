// src/layouts/GridLayout.js
import React, { useState, useEffect } from 'react';
import './GridLayout.css';

const GridLayout = ({ columns, rows, gutterSize }) => {
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < rows * columns; i++) {
      items.push(<div key={i} className="grid-item" style={{ margin: gutterSize }}></div>);
    }
    setGridItems(items);
  }, [columns, rows, gutterSize]);

  return (
    <div className="grid-layout" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}>
      {gridItems}
    </div>
  );
};

export default GridLayout;
