import React, { Component } from "react";
import PostEntries from "./PostEntries";
import AddEntry from "./AddEntry";

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
        <br/>
        <br/>
        <img style={{width:'650px',height:'150px'}} alt="blog posts logo" src="/img/postsintro.png"/>
        <PostEntries postEntries={this.state.posts} />
        <br/>
        <AddEntry/>
      </div>
    );
  }
}

export default Posts;