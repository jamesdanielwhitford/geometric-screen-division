// src/LayoutSelectionModal.js
import React from 'react';
import Modal from 'react-modal';

const LayoutSelectionModal = ({ isOpen, onClose, onSelectLayout }) => {
  const layouts = ['GoldenRatio', 'Fibonacci', 'Grid', 'RuleOfThirds', 'DynamicSymmetry'];

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Select Layout">
      <h2>Select a Layout</h2>
      <ul>
        {layouts.map(layout => (
          <li key={layout} onClick={() => { onSelectLayout(layout); onClose(); }}>
            {layout}
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default LayoutSelectionModal;
