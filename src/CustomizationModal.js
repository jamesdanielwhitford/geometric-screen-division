// src/CustomizationModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const CustomizationModal = ({ isOpen, onClose, selectedLayout, onUpdateLayout }) => {
  const [rootType, setRootType] = useState('Root 2');
  const [subdivisions, setSubdivisions] = useState(4);

  const handleRootTypeChange = (e) => {
    setRootType(e.target.value);
    onUpdateLayout({ rootType: e.target.value, subdivisions });
  };

  const handleSubdivisionsChange = (e) => {
    setSubdivisions(e.target.value);
    onUpdateLayout({ rootType, subdivisions: e.target.value });
  };

  const renderCustomizationOptions = () => {
    switch (selectedLayout) {
      case 'DynamicSymmetry':
        return (
          <div>
            <label>
              Root Type:
              <select value={rootType} onChange={handleRootTypeChange}>
                <option value="Root 2">Root 2</option>
                <option value="Root 3">Root 3</option>
                <option value="Root 4">Root 4</option>
              </select>
            </label>
            <label>
              Subdivisions:
              <input type="number" value={subdivisions} onChange={handleSubdivisionsChange} />
            </label>
          </div>
        );
      // Add cases for other layouts if needed
      default:
        return null;
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Customize Layout">
      <h2>Customize {selectedLayout} Layout</h2>
      {renderCustomizationOptions()}
    </Modal>
  );
};

export default CustomizationModal;
