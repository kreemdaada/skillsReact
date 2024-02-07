import React from 'react';

// Funktionale Komponente 'RemoveDuplicatesComponent' mit der Prop 'inputArray'
const RemoveDuplicatesComponent = ({ inputArray }) => {
    // Funktion zum Entfernen von Duplikaten aus einem Array
    const removeDuplicates = (array) => {
        const seen = new Set();
        return array.filter((item) => {
            if (!seen.has(item)) {
                seen.add(item);
                return true;
            }
            return false;
        });
    };

    // Anwenden der Funktion auf das 'inputArray'
    const resultArray = removeDuplicates(inputArray);

    // Rendern der Komponente
    return (
        <div>
            <h2>Original Array:</h2>
            <ul>
                {/* Darstellung des Original-Arrays mit Hilfe von 'map()' */}
                {inputArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h2>Array Ohne Duplikate:</h2>
            <ul>
                {/* Darstellung des Arrays ohne Duplikate mit Hilfe von 'map()' */}
                {resultArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

// Beispiel-Array 'inputArray'
const inputArray = [1, 2, 3, 1, 4, 2, 5, 6, 3, 7];

// Hauptkomponente 'App', die 'RemoveDuplicatesComponent' verwendet
const App = () => {
    return <RemoveDuplicatesComponent inputArray={inputArray} />;
};

// Exportieren der 'App'-Komponente als Standardexport
export default App;
