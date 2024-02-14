import React, { useState, useEffect } from 'react';

// Funktionale Komponente 'Counter' mit den Props 'initialCount' und 'step'
const Counter = ({ initialCount, step }) => {
  // State-Hook für die Zählvariable 'count'
  const [count, setCount] = useState(initialCount);

  // useEffect-Hook für Lebenszyklus-Ereignisse (Mounting und Unmounting)
  useEffect(() => {
    console.log("Component hat gemountet");

    // Cleanup-Funktion für Unmounting
    return () => {
      console.log("Component hat ungemountet");
    };
  }, []); // Leeres Abhängigkeitsarray bedeutet, dass der Effekt nur beim Mounting und Unmounting ausgeführt wird

  // Rendere die Komponente
  return (
    <>
      <h2>Counter {count}</h2>
      <button onClick={() => setCount(count + step)}>Increment by {step}</button>
      <button onClick={() => setCount(count - step)}>Decrement by {step}</button>
    </>
  );
};

// Exportiere die 'Counter'-Komponente als Standardexport
export default Counter;
