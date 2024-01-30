import React, { useState } from 'react';
import "../home/Home";

function FullHouseChecker() {
  const [hand, setHand] = useState(["3", "3", "3", "K", "K"]);
  const [newCard, setNewCard] = useState("");

  const isFullHouse = () => {
    const cardCounts = {};

    // Iteriere über jeden Charakter in der Kartenreihe
    for (const card of hand.join("")) {
      cardCounts[card] = (cardCounts[card] || 0) + 1;
    }

    
    let hasPair = false;
    let hasThreeOfAKind = false;

    for (const count of Object.values(cardCounts)) {

      if (count === 1) {

      if (count === 2) {

        hasPair = true;
      } else if (count === 3) {
        hasThreeOfAKind = true;
      }
    }

    return hasPair && hasThreeOfAKind;
  };

  const addCardToHand = () => {
    // Beispiel: Füge eine Karte zur Hand hinzu
    setHand([...hand, newCard]);
    setNewCard(""); // Leere das Eingabefeld nach dem Hinzufügen
  };
console.log(isFullHouse());
  return (
    <div>
      <h2>Full House Checker</h2>
      <p>Is it a Full House? {isFullHouse() ? 'Yes' : 'No'}</p>
      <input
        type="text"
        value={newCard}
        onChange={(e) => setNewCard(e.target.value)}
        placeholder="Enter a new card"
      />
      <button onClick={addCardToHand}>Add Card to Hand</button>
    </div>
  );
}
}

export default FullHouseChecker;
