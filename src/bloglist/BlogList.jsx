import React, { Component } from 'react';
class BlogList extends Component {
  render() {
    const { blogs } = this.props;

    // Überprüfe, ob blogs ein Array ist
    if (!Array.isArray(blogs)) {
      console.error("Error: 'blogs' is not an array.");
      return null;  // Oder zeige einen Fehler oder eine leere Ansicht an, je nach Bedarf
    }

    return (
      <div className="blog-list">
        <h2>Hallo</h2>
        {/* Verwende join nur, wenn blogs ein Array ist */}
        <p>{Array.isArray(blogs) ? blogs.join(", ") : null}</p>
      </div>
    );
  }
}

export default BlogList;