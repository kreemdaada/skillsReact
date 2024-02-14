import React, { useState } from 'react';

const OppositeHouseCalculator = () => {
  // State-Hooks verwenden, um den Zustand der Eingabefelder, des Ergebnisses und etwaiger Fehler zu verwalten.
  const [houseNumber, setHouseNumber] = useState('');
  const [streetLength, setStreetLength] = useState('');
  const [oppositeHouse, setOppositeHouse] = useState(null);
  const [error, setError] = useState('');

  // Funktion zum Berechnen der gegenüberliegenden Hausnummer.
  const calculateOppositeHouse = () => {
    // Parsen der eingegebenen Hausnummer und Straßenlänge in Ganzzahlen.
    const parsedHouseNumber = parseInt(houseNumber, 10);
    const parsedStreetLength = parseInt(streetLength, 10);

    // Überprüfung, ob die Eingaben gültige positive Ganzzahlen sind.
    if (isNaN(parsedHouseNumber) || isNaN(parsedStreetLength) || parsedHouseNumber < 1 || parsedStreetLength < 1) {
      setError('Please enter valid positive integers for house number and street length.');
      setOppositeHouse(null);
    } else {
      setError('');
      // Berechnung der gegenüberliegenden Hausnummer mithilfe der Formel.
      const oppositeHouseNumber = (parsedStreetLength * 2) - parsedHouseNumber + 1;
      setOppositeHouse(oppositeHouseNumber);
    }
  };

  // React-Komponente zurückgeben, die ein einfaches Formular mit Eingabefeldern und einem Ergebnis zeigt.
  return (
    <div>
      <h2>Opposite House Calculator</h2>
      <label>
        Enter House Number:
        <input
          type="number"
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter Street Length:
        <input
          type="number"
          value={streetLength}
          onChange={(e) => setStreetLength(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateOppositeHouse}>Calculate Opposite House</button>
      <br />
      {/* Fehlermeldung anzeigen, wenn vorhanden. */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* Gegenüberliegende Hausnummer anzeigen, wenn berechnet. */}
      {oppositeHouse !== null && (
        <p>
          The opposite house number is: {oppositeHouse}
        </p>
      )}
    </div>
  );
};

export default OppositeHouseCalculator;
//hausnummer 3 , Street length 10 *2 =20 -3 =17 +1 = 18 