// Importiere React und useState aus 'react'
import React, { useState } from 'react';

// Definiere die funktionale Komponente WorldLandmassCalculator
const WorldLandmassCalculator = () => {
  const [countryName, setCountryName] = useState('');
  const [countryArea, setCountryArea] = useState('');
  const [result, setResult] = useState(null);

  // Datenobjekt für die Weltlandmasse mit Gesamtlandmasse und individuellen Landmassen der Länder
    const worldLandmassData = {
      world: 148940000,
      'United States': 9833517,
      'Canada': 9976140,
      'Russia': 17098242,
      'China': 9596961,
      'Brazil': 8515767,
      'Australia': 7692024,
      'India': 3287263,
      'Argentina': 2780400,
      'Kazakhstan': 2724900,
      'Algeria': 2381741,
      'Congo (DR)': 2344858,
      'Greenland': 2166086,
      'Saudi Arabia': 2149690,
      'Mexico': 1964375,
      'Indonesia': 1904569,
      'Sudan': 1861484,
      'Libya': 1759540,
      'Iran': 1648195,
      'Mongolia': 1564116,
      'Peru': 1285216,
      'Chad': 1284000,
      'Niger': 1267000,
      'Angola': 1246700,
    };

      // Funktion zum Berechnen des Anteils der Landmasse eines Landes an der Welt
    const calculateProportion = () => {

       // Holen Sie sich die Landmasse des angegebenen Landes
      const countryLandmass = worldLandmassData[countryName];


      // Überprüfen Sie, ob der Ländername und die Fläche gültig sind, und berechnen Sie dann den Anteil
    if (countryLandmass !== undefined && countryArea !== '') {
      const countryProportion = (countryArea / worldLandmassData.world) * 100;
      setResult(`The landmass of ${countryName} is ${countryProportion.toFixed(2)}% of the world's landmass.`);
    } else {
      setResult('Please enter a valid country and its area.');
    }
  };
  
// JSX-Struktur der Komponente
  return (
    <div>
      <h2>World Landmass Calculator</h2>
      <label>
        Enter the country's name:
        <input
          type="text"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter the country's landmass (in square kilometers):
        <input
          type="number"
          value={countryArea}
          onChange={(e) => setCountryArea(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateProportion}>Calculate</button>
      <p>{result}</p>

      <h3>World Landmass Data Table</h3>
      <table className="table table-border table-striped">
        <thead>
          <tr>
            <th>Country</th>
            <th>Landmass (sq km)</th>
            <th>Proportion of World (%)</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(worldLandmassData).map(([country, landmass]) => {
            const proportion = ((landmass / worldLandmassData.world) * 100).toFixed(2);
            return (
              <tr key={country}>
                <td>{country}</td>
                <td>{landmass}</td>
                <td>{proportion}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WorldLandmassCalculator;
