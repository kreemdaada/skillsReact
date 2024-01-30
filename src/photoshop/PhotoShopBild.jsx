import React from 'react';
import Bild1 from '../assets/bild1.png';
import Bild2 from '../assets/bild2.png';

const PhotoShopBild = () => {
  const bilder = [
    { src: Bild1, alt: 'Bild 1', id: 1 },
    { src: Bild2, alt: 'Bild 2', id: 2 },
    // Füge weitere Bilder hinzu, falls nötig
  ];

  const handleClick = (bildId) => {
    console.log(`Bild ${bildId} wurde geklickt!`);
    // Hier kannst du entsprechende Aktionen basierend auf dem Bild ausführen
  };

  const bildStyle = {
    width: '200px', // Hier kannst du die Breite anpassen
    height: 'auto', // Die Höhe automatisch an die Breite anpassen, um das Seitenverhältnis zu bewahren
    cursor: 'pointer', // Zeige an, dass das Bild klickbar ist
  };

  return (
    <div>
      {bilder.map((bild) => (
        <div key={bild.id}>
          <h1>{`Mein Photoshop-Bild ${bild.id}`}</h1>
          <img
            src={bild.src}
            alt={bild.alt}
            onClick={() => handleClick(bild.id)}
            style={bildStyle}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoShopBild;
