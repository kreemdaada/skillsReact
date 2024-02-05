import React, { useState } from 'react';

// Funktionelle Komponente für die Laufsportler-Anwendung
const RunningAthlete = () => {
  // State-Variablen, um die Benutzereingabe und das generierte Ergebnis zu verfolgen
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  // Event-Handler für Änderungen der Benutzereingabe
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Funktion zum Generieren des Musters basierend auf der Benutzereingabe
  const generatePattern = () => {
    // Konvertiere die Eingabeaktionen in Kleinbuchstaben und teile sie in ein Array auf
    const actions = inputValue.toLowerCase().split(' ');

    // Ordne jeder Aktion ihr entsprechendes Symbol im Muster zu
    const pattern = actions.map(action => (action === 'run' ? '_' : (action === 'jump' ? '/' : ''))).join('');

    // Setze das generierte Muster in den Zustand des Ergebnisses
    setResult(pattern);
  };
  return (
    <div>
      {/* Input field for the user to enter actions */}
      <label>
        Enter actions (run/jump):{' '}
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>

      {/* Button to trigger the pattern generation */}
      <button onClick={generatePattern}>Generate Pattern</button>

      {/* Display the generated result */}
      <p>Result: {result}</p>
    </div>
  );
};

export default RunningAthlete;
