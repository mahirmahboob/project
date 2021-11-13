import React, { Component } from "react";

const url = "/rest/submit/comment";

class PostComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      text: "",
      post_title: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    var formData = new FormData();
    formData.append("user", this.state.user);
    formData.append("text", this.state.text);
    formData.append("post_title", this.props.postTitle);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        response.json();
      })

      .catch((error) => {
        console.log("Error: ", error);
      })
      .then((response) => console.log("Success: ", JSON.stringify(response)));
  };

  render() {
    const { user, text } = this.state;
    return (
      <div>
        <br />
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Leave a Comment
        </h1>
        <br />
        <form onSubmit={this.submitHandler}>
          <table
            border="0"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <tbody>
              <tr>
                <td>User Name:&nbsp;</td>
                <td>
                  <input
                    type="text"
                    name="user"
                    value={user}
                    onChange={this.changeHandler}
                  />
                </td>
              </tr>
              <tr>
                <td>Comment:</td>
                <td>
                  <input
                    type="text"
                    name="text"
                    value={text}
                    onChange={this.changeHandler}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="btn btn-primary" type="submit">
              Post
            </button>
          </div>
          <br />
          <br />
          <br />
        </form>
      </div>
    );
  }
}

export default PostComment;