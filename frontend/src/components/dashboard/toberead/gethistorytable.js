import React, { Component } from "react";
import ToBeDeleteFromHistory from "./tobedeletefromhistory";



//This is the history shelf...... This is where we will add user book.

const usr = JSON.parse(localStorage.getItem('current_user'));
const url = `/rest/historytable/${usr}`

class GetHistoryTable extends Component {
  constructor() {
    super();
    this.state = {
      gethistorytable: [],
    };
  }

  componentDidMount() {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
            gethistorytable: data,
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
                this.state.gethistorytable.map(rec => (
                  <div key={rec.PictureLink} className="book-card">
                  <img src={rec.PictureLink} height={300} witdth={210} />
                  </div>
                  ))
              }
            </div>
          <ToBeDeleteFromHistory gethistorytable={this.state.gethistorytable}/>
        </div>
      </div>
    );
  }
}
    
export default GetHistoryTable;