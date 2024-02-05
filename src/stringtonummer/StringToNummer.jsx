import React, { useState } from 'react';
import InputTrasform from '../stringtonummer/InputTransform'
const BinaryConverter = () => {
  // Zustände für Benutzereingabe und Binärergebnis
  const [inputText, setInputText] = useState('');
  const [binaryResult, setBinaryResult] = useState('');

  // Funktion zur Konvertierung von Text in Binär
  const textToNumberBinary = (inputText) => {
    // Teile den Eingabestring in Wörter auf
    const words = inputText.split(" ");
    
    // Filtere und konvertiere die Wörter in Binärform
    const binaryString = words
      .filter((word) => ["zero", "one"].includes(word.toLowerCase()))
      .map((word) => (word.toLowerCase() === "one" ? "1" : "0"))
      .join("");
    
    return binaryString;
  };

  // Event-Handler für Änderungen im Eingabefeld
  const handleInputChange = (event) => {
    // Aktualisiere den Zustand mit der neuen Benutzereingabe
    const newText = event.target.value;
    setInputText(newText);
    
    // Führe die Konvertierung durch und aktualisiere das Binärergebnis
    const result = textToNumberBinary(newText);
    setBinaryResult(result);
  };

  // Rendere die Komponente
  return (
    
    <div>
      <label>
        Eingabe:
        <input type="text" value={inputText} onChange={handleInputChange} />
      </label>
      <p>Binäres Ergebnis: {binaryResult}</p>
    </div>
    
  );
};

export default BinaryConverter;