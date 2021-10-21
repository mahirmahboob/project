import React, { Component } from "react";
import SearchBar from "../searchbar";
const url = "/rest/submit/post";

class AddEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      author: "",
      user: "",
    };
  }


  submitHandler = (e) => {
    e.preventDefault();
    console.log("in sumbit handler: ", this.state);
  };

  render() {
    const { title, link, user } = this.state;
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
          Add an entry to your to be read list
        </h1>
        <br />
        <form onSubmit={this.submitHandler}>
            <SearchBar usr={user} list={"tobelist"}/>
            <button className="btn btn-primary" type="submit">
              Submit
            </button> 
        </form>
      </div>
    );
  }
}

export default AddEntry;