import React, { Component } from "react";

const usr = JSON.parse(localStorage.getItem('current_user'));
const url = `/rest/deletehistory/${usr}`;

class DeleteSomethingFromHistoryTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = (title) => {
    console.log(title);
    //const requestOptions = { method: "DELETE", };

    fetch(url , {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
          title: title,
    
      })
    }).then(response => {

            if (response.status === 404) {
            alert("This book does not exist");
            }

            else if (response.status === 201)
            {
              window.location.reload(false);
            }
            })
           .catch(function(error) {
            
                alert(error);
            });

  };

  render() {
    return <div> {this.handleClick(this.props.title)} </div>;
  }
}


export default DeleteSomethingFromHistoryTable;