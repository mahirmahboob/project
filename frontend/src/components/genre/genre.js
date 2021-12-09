import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import "./genre.css"
import books from "../../testData/data"
import { Footer } from "../footer";


class GenreRecs extends Component {
    constructor() {
        super();
        this.state = {
            genres: [
                { name: "Cooking", icon: "cook1.jpg" },
                { name: "Romance", icon: "romance.jpg" },
                { name: "Fantasy", icon: "fantasy.jpg" },
                { name: "Adventure", icon: "adventure.jpg" },
                { name: "Action", icon: "action.jpg" },
                { name: "Detective", icon: "detect.jpg" },
            ],
            recommendations: [],
            showicons: false,
            icon: "",
            name:"",
        };
    };

    //when a button is clicked, it is going to send a request to server to get the data
    //and when we get the data back, we would be able to put that in the recommendation array
    //the get request will get data specific for that genre
    //data is the array of all the book recommendation
    //the data that we get back is json data


    handler = (genre) => {
        //this is to request data from the server
           fetch(`http://localhost:5000/home/${genre.name}`)
           .then(response=>response.json()) //converts to js. has the parsed data from the server and that becomes the parameter for the next .then
           .then(data=>{
               this.setState({
                   recommendations:data, //data is response.json
                   showicons: true,
                   icon: genre.icon,
                   name: genre.name,
               })
           })

        //this using dummy data incase there is no server. Use this when not connnected to the server.
        /*
        const recs = books.filter(book => book.genre === genre.name)
        this.setState({
            recommendations: recs,
            showicons: true,
            icon: genre.icon,
            name: genre.name,
        })
        */
    }

    render() {

        return (
            <div className="genre-container" >
                {
                    this.state.showicons && (
                        <div className="icons">
                            <img className="icon" src={`${process.env.PUBLIC_URL}/img/${this.state.icon}`} alt={this.state.icon} />
                            <h1 className="font">{this.state.name}</h1>
                            <img className="icon" src={`${process.env.PUBLIC_URL}/img/${this.state.icon}`} alt={this.state.icon} />
                        </div>
                    )
                }

                <div className="buttons">
                    {this.state.genres.map(genre => (
                        <button type="button" key={genre.name} onClick={() => this.handler(genre)} className="right" variant="warning" size="lg">
                            {genre.name}
                        </button>
                    ))}

                </div>
                <div className="recs mt-4">
                    {
                        this.state.recommendations.map(rec => (
                            <div key={rec.book_name} className="book-card">
                                <h2> Title: {rec.book_name}</h2>
                                <h2> Author: {rec.author}</h2>
                                <h2> Rating: {rec.rating}</h2>
                                <h2> Age Range: {rec.age_range}</h2>
                                <h2> Page: {rec.maximum_pages}</h2>
                                <h2> Publication Date: {rec.publication_date}</h2>
                                <h2> Best Seller: {rec.best_seller}</h2>
                                <h2>Series: {rec.series}</h2>
                                <h2><a href={rec.LinkToAmazon} target="_blank"> Purchase Link</a> </h2>
                                <img src={rec.PictureLink} height={300} witdth={300} />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default GenreRecs;