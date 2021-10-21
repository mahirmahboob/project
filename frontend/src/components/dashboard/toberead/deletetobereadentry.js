import React, { Component } from "react";

const url = "";

class DeleteEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (title, author) => {
    console.log(title,author);
    const requestOptions = { method: "DELETE", };

    fetch(url + title + "&" + author, requestOptions)   //"& is the delimiter"
      .then((response) => { return response.json(); })
      .then((result) => { console.log("successful delete"); });
  };

  render() {
    return <div> {this.handleClick(this.props.title)} </div>;
  }
}

export default DeleteEntry;