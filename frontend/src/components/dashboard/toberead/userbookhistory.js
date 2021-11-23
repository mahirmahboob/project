import React, { Component } from "react";

const usr = JSON.parse(localStorage.getItem('current_user'));
const url = `/rest/add/${usr}`

class FinishReading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (title) => {
    //console.log(title);
    //const requestOptions = { method: "DELETE", };

    fetch(url , {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
          title: title,
    
      })
    }).then(response => {

            if (response.status === 406)
            {
              alert("That book already exist in the user history shelf")
            }

            else if (response.status === 201)
            {
              alert("We succesfully added this book to your history table")
              window.location.reload(false);
            }
            })
           .catch(function(error) {
            
                alert(error);
            });

    //fetch(url + title, requestOptions)   //"& is the delimiter"
      //.then((response) => { return response.json(); })
      //.then((result) => { console.log("successful delete"); });
  };

  render() {
    return <div> {this.handleClick(this.props.title)} </div>;
  }
}


export default FinishReading;