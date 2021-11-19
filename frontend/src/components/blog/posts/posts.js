import React, { Component } from "react";
import PostEntries from "./PostEntries";

const url = "localhost:5000/posts"; 

class Posts extends Component {
  constructor() {
    super();
    this.state = { posts: "" };
  }
  componentDidMount() {
    fetch("http://localhost:5000/posts", { method: "GET" })
      .then((response) => response.json())
      .then((data) => { this.setState({ posts: data }); });
  }
  render() {
    return (
      <div>
        Blog Posts
        <PostEntries postEntries={this.state.posts} />
      </div>
    );
  }
}

export default Posts;