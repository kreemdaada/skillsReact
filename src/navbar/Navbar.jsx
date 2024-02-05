import React from 'react';

const Navbar = () => {
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Navbar</a>
      <a className="navbar-brand" href="/">React / WBS</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto"> {/* Added ml-auto for right alignment */}
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/BlogList">BlogList</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Students">Student</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/LandMass">Länder Mässen</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/FullHouse">Poker</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/imageslider">Image Slider</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/stringtonummer">Convert to Nummer </a>
          </li>
          </ul>
      </div>
    </nav>

  );
};

export default Navbar;