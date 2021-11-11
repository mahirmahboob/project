import React, { Component } from "react";
import SearchBar from "../searchbar";
import ToBeReadList from "./tobereadlistings";



//This is the bookshelf...... This is where we will add user book.

const usr = JSON.parse(localStorage.getItem('current_user'));
const url = `/rest/toberead/${usr}`; 

class ToBeRead extends Component {
  constructor() {
    super();
    this.state = {
      toberead: [],
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
    //console.log(this.state.articles);
    return (
      <div >
        <div style={{width:'890px', height:'340px', overflowY:'scroll'}}>
          <br/>
            <div className="recs mt-44">
              {
                this.state.toberead.map(rec => (
                  <div key={rec.PictureLink} className="book-card">
                  <img src={rec.PictureLink} height={300} witdth={210} />
                  </div>
                  ))
              }
            </div>
          <ToBeReadList toberead={this.state.toberead} />
        </div>
      </div>
    );
  }
}
    
export default ToBeRead;