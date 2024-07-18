// src/layouts/ModularGridLayout.js
import React, { useState, useEffect } from 'react';
import './ModularGridLayout.css';

const ModularGridLayout = ({ columns, rows }) => {
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < rows * columns; i++) {
      items.push(<div key={i} className="grid-item"></div>);
    }
    setGridItems(items);
  }, [columns, rows]);

  return <div className="modular-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}>{gridItems}</div>;
};

export default ModularGridLayout;
