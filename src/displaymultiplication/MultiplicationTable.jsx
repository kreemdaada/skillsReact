import React, { useState, useEffect } from 'react';

// Funktionale Komponente 'MultiplicationTable' mit der Prop 'n'
function MultiplicationTable({ n }) {
  // State-Hook für die Tabelle
  const [table, setTable] = useState([]);

  // useEffect-Hook für die Generierung der Tabelle bei Änderung von 'n'
  useEffect(() => {
    // Funktion zum Generieren der Tabelle
    const generateTable = () => {
      const newTable = [];
      // Äußere Schleife für die Zeilen
      for (let i = 1; i <= n; i++) {
        const row = [];
        // Innere Schleife für die Zellen in einer Zeile
        for (let j = 1; j <= n; j++) {
          row.push(i * j); // Multiplikation für jede Zelle
        }
        newTable.push(row);
      }
      // Setz der generierten Tabelle im State
      setTable(newTable);
    };

    // Aufruf der Funktion zum Generieren der Tabelle
    generateTable();
  }, [n]); // Das Array mit 'n' als Abhängigkeit sorgt dafür, dass der Effekt bei Änderungen von 'n' erneut ausgeführt wird

  // Rendern der Komponente
  return (
    <div>
      <h2>Multiplication Table ({n} x {n})</h2>
      {/* Darstellung der Tabelle mit Hilfe von 'table.map()' */}
      <table>
        <tbody>
          {table.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Exportieren der 'MultiplicationTable'-Komponente als Standardexport
export default MultiplicationTable;
