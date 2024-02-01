import React, { useState } from 'react';




  function Contact(props) {
  const { my_blogs } = props;
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleClick = (blog) => {
    const modifiedValue = modify(blog);
    console.log(`decimalNumber: ${modifiedValue}`);
    setSelectedBlog(blog);
    if (blog === my_blogs[my_blogs.length - 1]) {
      alert('Ende der Liste');
    }
    console.log(`Du hast dieses Element ausgewählt: ${blog}`);
  };

  function modify(blog) {
    // Ensure that blog is a string
    const blogString = String(blog);
  
    const reversedString = blogString.split('').reverse().join('');
    const letterPosition = reversedString.split('').map((letter) => {
      if (letter.match(/[a-z]/i)) {
        return letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1;
      }
      return letter;
    });
    const joinNumber = parseInt(letterPosition.join(''), 10);
    const binaryString = joinNumber.toString(2);
    return binaryString;
  }

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

export default Contact;

