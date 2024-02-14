import React, { useState } from 'react';

const OppositeHouseCalculator = () => {
  const [houseNumber, setHouseNumber] = useState('');
  const [streetLength, setStreetLength] = useState('');
  const [oppositeHouse, setOppositeHouse] = useState(null);
  const [error, setError] = useState('');

  const calculateOppositeHouse = () => {
    const parsedHouseNumber = parseInt(houseNumber, 10);
    const parsedStreetLength = parseInt(streetLength, 10);

    if (isNaN(parsedHouseNumber) || isNaN(parsedStreetLength) || parsedHouseNumber < 1 || parsedStreetLength < 1) {
      setError('Please enter valid positive integers for house number and street length.');
      setOppositeHouse(null);
    } else {
      setError('');
      const oppositeHouseNumber = (parsedStreetLength * 2) - parsedHouseNumber + 1;
      setOppositeHouse(oppositeHouseNumber);
    }
  };

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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {oppositeHouse !== null && (
        <p>
          The opposite house number is: {oppositeHouse}
        </p>
      )}
    </div>
  );
};

export default OppositeHouseCalculator;