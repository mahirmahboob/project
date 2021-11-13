import React, { Component } from "react";

const url = "/rest/submit/comment";

class DeleteComment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (uuid) => {
    var formData = new FormData();
    formData.append("uuid", uuid);
    const requestOptions = {
      method: "DELETE",
      body: formData
    };

    // user+text is the user's name and text body
    fetch(url, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log("successful delete");
      });
  };

  render() {
    return <div>{this.handleClick(this.props.uuid)}</div>;
  }
}

export default DeleteComment;