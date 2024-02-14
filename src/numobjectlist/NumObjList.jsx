import React, { useState } from 'react';

const NumObjList = ({ initialNumbers }) => {
  const [numbers, setNumbers] = useState(initialNumbers || []);

  const resultObjects = numbers.map((number) => ({
    [String(number)]: String.fromCharCode(number),
  }));

  const handleInputChange = (e) => {
    // Hier kannst du die Logik hinzufügen, um die eingegebenen Zahlen zu verarbeiten.
    // In diesem Beispiel nehmen wir an, dass der Benutzer eine kommaseparierte Zeichenfolge eingibt.
    const newNumbers = e.target.value
      .split(',')
      .filter((num) => !isNaN(num)) // Nur gültige Zahlen akzeptieren
      .map((num) => parseInt(num, 10)); // In Integer umwandeln

    setNumbers(newNumbers);
  };

  return (
    <div>
      <label>
        Enter numbers (comma-separated):{' '}
        <input type="text" value={numbers.join(',')} onChange={handleInputChange} />
      </label>

      <div>
        <h2>Resulting Objects:</h2>
        <ul>
          {resultObjects.map((obj, index) => (
            <li key={index}>{JSON.stringify(obj)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NumObjList;
