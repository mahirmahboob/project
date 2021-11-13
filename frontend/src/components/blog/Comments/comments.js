import React, { Component } from "react";
import CommentEntries from "./CommentEntries";

const url = "localhost:6800/comments/"; 

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: "",
    };
  }

  componentDidMount() {
    var title = this.props.title;
    fetch("http://localhost:6800/comments/" + title, { method: "GET" })
      .then((response) => response.json())
      .then((data) => { this.setState({ comments: data }); });
  }

  render() {
    return (
      <div>
        <CommentEntries commentEntries={this.state.comments} postTitle={this.props.title} />
      </div>
    );
  }
}

export default Comments;