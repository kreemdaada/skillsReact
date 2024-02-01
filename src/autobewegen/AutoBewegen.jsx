// AutoBewegen.jsx
import React, { useState, useEffect } from 'react';

const Vehicle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveUp = distance => setPosition(prev => ({ ...prev, y: prev.y - distance }));
  const moveDown = distance => setPosition(prev => ({ ...prev, y: prev.y + distance }));
  const moveLeft = distance => setPosition(prev => ({ ...prev, x: prev.x - distance }));
  const moveRight = distance => setPosition(prev => ({ ...prev, x: prev.x + distance }));

  useEffect(() => {
    const handleKeyDown = event => {
      switch (event.key) {
        case 'ArrowUp':
          moveUp(20);
          break;
        case 'ArrowDown':
          moveDown(20);
          break;
        case 'ArrowLeft':
          moveLeft(20);
          break;
        case 'ArrowRight':
          moveRight(20);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        width: '20px',
        height: '20px',
        backgroundColor: 'blue',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    ></div>
  );
};

export default Vehicle;
