import React, { Component } from "react";
import SearchBar from "../searchbar";
import ToBeReadList from "./tobereadlistings";


const url = "/rest/{usr}/toberead"; //temp url hosting on json server

class ToBeRead extends Component {
  constructor() {
    super();
    this.state = {
      toberead: "",
    };
  }

  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
            toberead: data,
        });
      });
  }

  render() {
    console.log(this.state.articles);
    return (
      <div>
          To be Read: 
        <ToBeReadList toberead={this.state.toberead} />
      </div>
    );
  }
}
    
export default ToBeRead;