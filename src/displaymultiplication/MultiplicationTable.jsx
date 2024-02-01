import React, { useState, useEffect } from 'react';

function MultiplicationTable({ n }) {
  const [table, setTable] = useState([]);

  useEffect(() => {
    const generateTable = () => {
      const newTable = [];
      for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j = 1; j <= n; j++) {
          row.push(i * j);
        }
        newTable.push(row);
      }
      setTable(newTable);
    };

    generateTable();
  }, [n]);

  
  return (
    <div>
      <h2>Multiplication Table ({n} x {n})</h2>
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

export default MultiplicationTable;