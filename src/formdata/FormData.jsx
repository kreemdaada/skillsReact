import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // State für Formulardaten und vorhandene Daten
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefonnummer: '',
    gender: '',
    nachricht: '',
    land: '',
  });

  const [data, setData] = useState([]);

  // Effekt zum Laden vorhandener Daten beim Komponentenstart
  useEffect(() => {
    axios.get('http://localhost/skillsReact-main/backend/api.php')
      .then(response => {
        console.log('API Response:', response.data);
  
        // Überprüfe, ob response.data ein Array ist
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          console.error('API Response is not an array:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

    // Funktion zum Laden vorhandener Daten
    const fetchData = () => {
      axios.get('http://localhost/skillsReact-main/backend/api.php')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    };


  // Funktion zum Aktualisieren der Formulardaten bei Eingabe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Funktion zum Hinzufügen neuer Daten
  const handleSubmit = (e) => {
    e.preventDefault();

    // POST-Anfrage, um neue Daten hinzuzufügen
    axios.post('http://localhost/skillsReact-main/backend/api.php', formData)
      .then(response => {
        console.log('Data added successfully:', response.data);

        // Nach dem Hinzufügen, lade die aktualisierten Daten erneut
        fetchData();
      })
      .catch(error => {
        console.error('Error adding data:', error);
      });
  };

  return (
    <div>
      <h1>Your React App</h1>
      <form onSubmit={handleSubmit}>
        {/* Beispiel: Vorname-Eingabefeld */}
        <label>
          Vorname:
          <input type="text" name="vorname" value={formData.vorname} onChange={handleChange} />
        </label>
        {/* Füge weitere Formularelemente für andere Eigenschaften hinzu */}
        <button type="submit">Daten hinzufügen</button>
      </form>
      <hr/>
      <ul>
  {Array.isArray(data) ? (
    data.map(item => (
      <li key={item.id}>
        <p>ID: {item.id}</p>
        <p>Vorname: {item.vorname}</p>
        <p>Nachname: {item.nachname}</p>
        <p>Email: {item.email}</p>
        <p>Telefonnummer: {item.telefonnummer}</p>
        <p>Gender: {item.gender}</p>
        <p>Nachricht: {item.nachricht}</p>
        <p>Land: {item.land}</p>
        <hr />
      </li>
    ))
  ) : (
    <p>No data available.</p>
  )}
</ul>
    </div>
  );
}

export default App;
