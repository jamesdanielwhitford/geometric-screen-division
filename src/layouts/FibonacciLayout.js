// src/layouts/FibonacciLayout.js
import React, { useState, useEffect, useCallback } from 'react';
import './FibonacciLayout.css';

const FibonacciLayout = () => {
  const fibonacciSequence = [1, 1, 2, 3, 5, 8, 13]; // Limited for practical screen size

  const calculateDimensions = (sequence) => {
    let dimensions = [];
    let x = 0;
    let y = 0;
    let width = 100;
    let height = 100;

    const directions = ['right', 'down', 'left', 'up'];

    for (let i = 0; i < sequence.length; i++) {
      const direction = directions[i % 4];

      if (direction === 'right') {
        dimensions.push({ x, y, width: width * sequence[i] / sequence[sequence.length - 1], height });
        x += (width * sequence[i] / sequence[sequence.length - 1]);
      } else if (direction === 'down') {
        dimensions.push({ x, y, width, height: height * sequence[i] / sequence[sequence.length - 1] });
        y += (height * sequence[i] / sequence[sequence.length - 1]);
      } else if (direction === 'left') {
        x -= (width * sequence[i] / sequence[sequence.length - 1]);
        dimensions.push({ x, y, width: width * sequence[i] / sequence[sequence.length - 1], height });
      } else { // 'up'
        y -= (height * sequence[i] / sequence[sequence.length - 1]);
        dimensions.push({ x, y, width, height: height * sequence[i] / sequence[sequence.length - 1] });
      }
    }

    return dimensions;
  };

  const [dimensions, setDimensions] = useState(calculateDimensions(fibonacciSequence));

  const randomizeDimensions = useCallback(() => {
    const shuffledSequence = fibonacciSequence.sort(() => Math.random() - 0.5);
    setDimensions(calculateDimensions(shuffledSequence));
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'r') {
        randomizeDimensions();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [randomizeDimensions]);

  return (
    <div className="fibonacci-layout">
      {dimensions.map((dim, index) => (
        <div
          key={index}
          className="fibonacci-box"
          style={{
            width: `${dim.width}%`,
            height: `${dim.height}%`,
            left: `${dim.x}%`,
            top: `${dim.y}%`
          }}
        ></div>
      ))}
    </div>
  );
};

export default FibonacciLayout;
