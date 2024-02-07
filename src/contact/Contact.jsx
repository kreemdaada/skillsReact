import React, { useState } from 'react';

// Funktionale Komponente 'Contact'
function Contact(props) {
  // Extrahiere 'my_blogs' aus den übergebenen Props
  const { my_blogs } = props;

  // State-Hook, um das ausgewählte Blog-Element zu verfolgen
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Funktion zum Klicken auf ein Blog-Element
  const handleClick = (blog) => {
    // Modifiziere das ausgewählte Blog-Element und zeige Informationen an
    const modifiedValue = modify(blog);
    console.log(`decimalNumber: ${modifiedValue}`);
    setSelectedBlog(blog);

    // Zeige eine Warnung an, wenn das letzte Blog-Element ausgewählt wurde
    if (blog === my_blogs[my_blogs.length - 1]) {
      alert('Ende der Liste');
    }

    // Zeige Informationen über das ausgewählte Element in der Konsole an
    console.log(`Du hast dieses Element ausgewählt: ${blog}`);
  };

  // Funktion zum Modifizieren des Blog-Elements
  function modify(blog) {
    // Stelle sicher, dass 'blog' eine Zeichenkette ist
    const blogString = String(blog);
  
    // Kehre die Zeichenkette um
    const reversedString = blogString.split('').reverse().join('');

    // Ermittle die Position jedes Buchstabens im Alphabet
    const letterPosition = reversedString.split('').map((letter) => {
      if (letter.match(/[a-z]/i)) {
        return letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      }
      return letter;
    });

    // Verbinde die Zahlen und konvertiere sie in eine binäre Zeichenkette
    const joinNumber = parseInt(letterPosition.join(''), 10);
    const binaryString = joinNumber.toString(2);

    // Gebe die modifizierte binäre Zeichenkette zurück
    return binaryString;
  }

  // Rendere die Liste der Blogs
  return (
    <div>
      <h1>List of Blogs</h1>
      <ul className="list-group">
        {my_blogs.map((blog) => (
          <li
            key={blog.id}
            className={blog === selectedBlog
              ? "list-group-item selected"
              : "list-group-item"}
            onClick={() => handleClick(blog)}
          >
            <div>
              <h2>{blog.title}</h2>
              <p>{blog.body}</p>
              <p>Author: {blog.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Exportiere die 'Contact'-Komponente als Standardexport
export default Contact;
