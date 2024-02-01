import React from 'react';
import { Link } from 'react-router-dom';

const ImageHome = () => {
  return (
    <div>
      <h1>Startseite</h1>
      <p>Willkommen auf der Startseite!</p>
      <Link to="/imageslider">Zur Image Slider Seite</Link>
    </div>
  );
};

export default ImageHome;