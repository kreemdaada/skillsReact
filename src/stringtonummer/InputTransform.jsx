import React, { useState } from 'react';

const EmojiConverter = () => {
  // State-Variablen zum Verfolgen der Benutzereingabe und des generierten Ergebnisses
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  // Event-Handler für Eingabeänderungen
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Funktion zum Konvertieren von Wörtern in Emojis
  const convertToEmoji = () => {
    // Schlüsselwörter und zugehörige Emojis definieren
    const keywords = ['auto', 'zug', 'ampel', 'welt', 'kirche', 'krankenwagen', 'lachen', 'weinen', 'pizza', 'burger', 'blume'];
    const emojis = ['🚗', '🚋', '🚦', '🌎', '⛪', '🚑', '😂', '😥', '🍕', '🍔', '🌷'];

    // Benutzereingabe in Kleinbuchstaben umwandeln und in ein Array aufteilen
    const words = inputValue.toLowerCase().split(' ');

    // Jedes Wort in der Eingabe überprüfen und durch das entsprechende Emoji ersetzen
    const convertedResult = words.map(word => {
      const index = keywords.indexOf(word);
      // Wenn das Wort in den Schlüsselwörtern gefunden wurde, wird das zugehörige Emoji zurückgegeben, sonst das ursprüngliche Wort
      return index !== -1 ? emojis[index] : word;
    }).join(' ');

    // Das generierte Ergebnis in den Resultat-Zustand setzen
    setResult(convertedResult);
  };

  return (
    <div>
      {/* Eingabefeld für den Benutzer, um Wörter einzugeben */}
      <label>
        Wörter eingeben: {' '}
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>

      {/* Button zum Auslösen der Umwandlung in Emojis */}
      <button onClick={convertToEmoji}>In Emoji umwandeln</button>

      {/* Anzeigen des generierten Ergebnisses */}
      <p>Ergebnis: {result}</p>
    </div>
  );
};

export default EmojiConverter;
