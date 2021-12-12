import React, { Component } from "react";


class PostComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      text: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

      submitHandler = (e) => {
        e.preventDefault();

        fetch('/rest/submit/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: this.state.user,
                text: this.state.text,
                post_title: this.props.postTitle,
            })
        }).then(response => {

            if (response.status === 404) {
            alert("Something went wrong");
            
            }
            else if (response.status === 201)
            {
              window.location.reload(false);
              
            }
            })
           .catch(function(error) {
            
                alert(error);
            });
        }

  render() {
    const { user, text } = this.state;
    return (
      <div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: '20px'
          }}
        >
          Leave a Comment!
        </div>
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
                    style={{width:'500px', height:'20px'}}
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
                    style={{width:'500px', height:'50px'}}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button style={{width:'90px', height:'40px'}} type="submit">
              Post
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>

        </form>
      </div>
    );
  }
}

export default PostComment;