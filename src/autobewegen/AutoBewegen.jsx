// AutoBewegen.jsx
import React, { useState, useEffect } from 'react';

const Vehicle = () => {
  // State für die Position des Fahrzeugs
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Funktionen zum Bewegen des Fahrzeugs in verschiedene Richtungen
  const moveUp = distance => setPosition(prev => ({ ...prev, y: prev.y - distance }));
  const moveDown = distance => setPosition(prev => ({ ...prev, y: prev.y + distance }));
  const moveLeft = distance => setPosition(prev => ({ ...prev, x: prev.x - distance }));
  const moveRight = distance => setPosition(prev => ({ ...prev, x: prev.x + distance }));

  // useEffect für das Hinzufügen und Entfernen des Event Listeners beim Laden und Entladen der Komponente
  useEffect(() => {
    const handleKeyDown = event => {
      // Überprüfen Sie, welche Pfeiltaste gedrückt wurde, und aktualisieren Sie die Position entsprechend
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

    // Event Listener für das Tastaturereignis hinzufügen
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup-Funktion zum Entfernen des Event Listeners beim Entladen der Komponente
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Das leere Array als zweites Argument stellt sicher, dass dieser Effekt nur einmal bei der Montage ausgeführt wird.

  // JSX, um das Fahrzeug anzuzeigen
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
