import React, { Component } from "react";
import SearchBar from "../searchbar";

class AddEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //user: "",
      book_name: "",
    };
  }


  handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
  }

  submitHandler = (e) => {
    e.preventDefault();
          fetch('http://localhost:5000/addbook', {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            //user: this.state.user,
            book_name: this.state.book_name,

            })
        }).then(response => {

            if (response.status === 401) {
            alert("user is not logged in");          
            }
            else if (response.status === 201)
            {
            alert("Successfully added to the book_mark List");
            }
            })
            .catch(function(error) {
            
                alert("Something went wrong");
            });
        }

  render() {
    
    const {book_name} = this.state;
    console.log(book_name);
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
            <SearchBar />
            <button className="btn btn-primary" type="submit">
              Submit
            </button> 
        </form>
      </div>
    );
  }
}

export default AddEntry;