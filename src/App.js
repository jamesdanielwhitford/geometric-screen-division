// src/App.js
import React, { useState, useEffect, useCallback } from 'react';
import LayoutSelectionModal from './LayoutSelectionModal';
import CustomizationModal from './CustomizationModal';
import GoldenRatioLayout from './layouts/GoldenRatioLayout';
import FibonacciLayout from './layouts/FibonacciLayout';
import GridLayout from './layouts/GridLayout';
import RuleOfThirdsLayout from './layouts/RuleOfThirdsLayout';
import DynamicSymmetryLayout from './layouts/DynamicSymmetryLayout';
import './App.css';

const App = () => {
  const [selectedLayout, setSelectedLayout] = useState('GoldenRatio');
  const [isLayoutModalOpen, setLayoutModalOpen] = useState(false);
  const [isCustomizationModalOpen, setCustomizationModalOpen] = useState(false);
  const [columns, setColumns] = useState(4);
  const [rows, setRows] = useState(4);
  const [gutterSize, setGutterSize] = useState(5);
  const [rootType, setRootType] = useState('Root 2');
  const [subdivisions, setSubdivisions] = useState(4);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleKeyPress = useCallback((event) => {
    if (event.key === 'l') {
      setLayoutModalOpen(true);
      setShowOverlay(true);
      setTimeout(() => setShowOverlay(false), 1000);
    }
    if (event.key === 'c') {
      setCustomizationModalOpen(true);
      setShowOverlay(true);
      setTimeout(() => setShowOverlay(false), 1000);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleUpdateLayout = ({ columns, rows, gutterSize, rootType, subdivisions }) => {
    if (columns !== undefined) setColumns(columns);
    if (rows !== undefined) setRows(rows);
    if (gutterSize !== undefined) setGutterSize(gutterSize);
    if (rootType !== undefined) setRootType(rootType);
    if (subdivisions !== undefined) setSubdivisions(subdivisions);
  };

  const renderLayout = () => {
    switch (selectedLayout) {
      case 'GoldenRatio':
        return <GoldenRatioLayout />;
      case 'Fibonacci':
        return <FibonacciLayout />;
      case 'Grid':
        return <GridLayout columns={columns} rows={rows} gutterSize={gutterSize} />;
      case 'RuleOfThirds':
        return <RuleOfThirdsLayout />;
      case 'DynamicSymmetry':
        return <DynamicSymmetryLayout rootType={rootType} subdivisions={subdivisions} />;
      default:
        return <GoldenRatioLayout />;
    }
  };

  return (
    <div className="App">
      {renderLayout()}
      {showOverlay && <div className="overlay">Shortcut Activated</div>}
      <LayoutSelectionModal
        isOpen={isLayoutModalOpen}
        onClose={() => setLayoutModalOpen(false)}
        onSelectLayout={setSelectedLayout}
      />
      <CustomizationModal
        isOpen={isCustomizationModalOpen}
        onClose={() => setCustomizationModalOpen(false)}
        selectedLayout={selectedLayout}
        onUpdateLayout={handleUpdateLayout}
      />
    </div>
  );
};

export default App;
