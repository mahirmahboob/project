import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import "./genre.css"
import books from "../../testData/data.js" 

class GenreRecs extends Component {
    constructor() {
        super();
        this.state = {
           genres: ["cooking", "romance", "drama", "fantasy", "adventure", "action", "detective"], 
           recommendations:[],
        };
    };
   
    //when a button is clicked, it is going to send a request to server to get the data
    //and when we get the data back, we would be able to put that in the recommendation array
    //the get request will get data specific for that genre
    //data is the array of all the book recommendation
    //the data that we get back is json data

    
    handler=(genre)=>{
        //this is to request data from the server
       fetch(`http://localhost:5000/home/${genre}`)
       .then(response=>response.json()) //converts to js. has the parsed data from the server and that becomes the parameter for the next .then
       .then(data=>{
        this.setState({
            recommendations:data //data is response.json
           })
       })
      
    //this using dummy data incase there is no server. Use this when not connnected to the server.
    /*
    const recs=books.filter(book=>book.genre===genre)
      this.setState({
          recommendations:recs 
      })
    */

      } // this is the end of handler
    
    render() {
     return (  
        <div >
        <div className="button">
        {this.state.genres.map(genre => (
        <Button key={genre} onClick={ ()=>this.handler(genre)} className="right" variant="warning" size="lg">
        {genre}
        </Button>
        ))}
        
    </div>
    <div className="recs mt-4">
        {
            this.state.recommendations.map(rec=>(
                <div key={rec.book_name}className="book-card">
                <h2> Title: {rec.book_name}</h2>
                <h2> Author: {rec.author}</h2>
                <h2> Rating: {rec.rating}</h2>
                <h2> Age Range: {rec.age_range}</h2>
                <h2> Page: {rec.maximum_pages}</h2>
                <h2> Publication Date: {rec.publication_date}</h2>
                <h2> Best Seller: {rec.best_seller}</h2>
                <h2>Series: {rec.series}</h2>
                </div>
            ))
        }
    </div>
        </div>
    );
    }
}

export default GenreRecs;