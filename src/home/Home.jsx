import React, { Component } from 'react';
import "../home/styleHome.css";
import BlogList from "../bloglist/BlogList";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      my_blogs: ["hallo", "welt", "kareem", "a", "GutenMorgen"],
      selectedBlog: null,
      blogs: ["Blog 1", "Blog 2", "Blog 3"]
    };
  }
 
  handleClick = (blog) => {
    const modifiedValue = this.modify(blog);
    console.log(`decimalNumber: ${modifiedValue}`);
    this.setState({ selectedBlog: blog });
    if (blog === this.state.my_blogs[this.state.my_blogs.length - 1]) {
      alert('Ende der Liste');
    }
    console.log(`Du hast dieses Element ausgewählt: ${blog}`);
  };
  //binären output// string to binary// 
  modify = (blog) => {
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

  render() {
    return (
      <div>
        <h1>List of Numbers</h1>
        <ul className="list-group">
          {this.state.my_blogs.map((blog, index) => (
            <li 
              key={index} 
              className={blog === this.state.selectedBlog
              ? "list-group-item selected"
              : "list-group-item"}
              onClick={() => this.handleClick(blog)}
            >
              {blog}
            </li>
          ))}
        </ul>
        <BlogList blogs={this.state.blogs}/>
      </div>
    );
  }
}

export default Home;