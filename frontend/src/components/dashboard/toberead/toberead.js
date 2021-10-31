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

      <div >
        <div style={{width:'890px', height:'340px', overflowY:'scroll'}}>
          <br/>
          <img alt="paris cover" src="/img/blog4.jpg" width="210" height="300" />
          <img alt="rose cover" src="/img/rose.png" width="210" height="300"/>
          <img alt="rose cover" src="/img/hundred.jpg" width="210" height="300"/>
          <img alt="wuthering heights cover" src="/img/heights.jpg" width="210" height="300"/>

          <ToBeReadList toberead={this.state.toberead} />
        </div>
        
      </div>
    );
  }
}
    
export default ToBeRead;