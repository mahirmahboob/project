import React, { Component } from "react";
import SearchBar from "../searchbar";

const usr = JSON.parse(localStorage.getItem('current_user'));
const url = `/rest/submit/${usr}`;

class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      user: usr,
    };
    this.update_title = this.update_title.bind(this);
  }

   update_title(newdata) {
      this.setState({ title: newdata}, ()=>{
      //console.log(this.state.title);
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
  
    fetch(url , {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
          title: this.state.title,
    
      })
    }).then(response => {

            if (response.status === 406) 
            {
            alert("That book already exist in your bookshelf");
            }

            else if (response.status === 400) 
            {
              alert("You already read that book, its in your history table")
            }

            else if (response.status === 201)
            {
              alert("Succesfull adding the book")
              window.location.reload(false);
            }
            })
           .catch(function(error) {
            
                alert(error);
            });
  };

  render() {
    const { title, user } = this.state;
    return (
      <div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: 'Courier New',
            fontSize: '25px'
          }}
        >
          My Bookshelf
        </div>
        <br />
        <form onSubmit={this.submitHandler}>
          <div>
            <div style={{paddingLeft:'200px'}}>
               <SearchBar data={this.state.title} update_title={this.update_title}/>
            </div>
            <div>
              <br/>
              <button style={{backgroundColor:"steelBlue", color:'white', fontFamily: 'Courier New',width:'500px', height:'40px'}} type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddEntry;