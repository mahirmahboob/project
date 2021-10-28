
import React, { Component } from "react";
import Button from 'react-bootstrap/Button'; 
const url = "/takeaquiz";

// var res = {name: "", picture: "",author: "", genre: "", synopsis: "" };
class QuizRecs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genre: '',
      age: '',
      page: '',
      date: '',
      triggers: '',
      recommendations:[],
    }
  }


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    // get form data out of state
    //const { genre, age, page, date, triggers } = this.state;

    fetch(url , {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
          genre: this.state.genre,
          age: this.state.age,
          page: this.state.page,
          date: this.state.date,
          triggers: this.state.triggers,
      })
    }).then(result =>result.json())
      .then(data => {
        this.setState({
          recommendations:data
        })
      })
    } // end of onSubmit

    render() {
      const { classes } = this.props;
      const {genre, age, page, date, triggers } = this.state;

      return (
        <div className="session">
        <h1>Take a quiz to find your next read!</h1>
          <div className="register-form">
            <form onSubmit={this.onSubmit}>
              <select value={this.value} name="genre" onChange={this.onChange}> Pick the first genre
                <option value="romance">Romance</option>
                <option value="history">History</option>
                <option value="mystery">Mystery</option>
                <option value="cooking">Cooking</option>
                <option value="fantasy">Fantasy</option>
                <option value="drama">Drama</option>
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="detective">Detective</option>
              </select>
              <select value={this.value} name="age" onChange={this.onChange}> Pick a age range
                <option value="child">child</option>
                <option value="young adult">young adult</option>
                <option value="adult">adult</option>
                <option value="all">all</option>
              </select>
              <select value={this.value} name="page" onChange={this.onChange}> Pick a page range
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="200">200</option>
                <option value="250">250</option>
                <option value="300">300</option>
                <option value="350">350</option>
                <option value="400">400+</option>
              </select>
              <select value={this.value} name="date" onChange={this.onChange}> Pick publication date
                <option value="1960">1960</option>
                <option value="1970">1970</option>
                <option value="1980">1980</option>
                <option value="1990">1990</option>
                <option value="2000">2000</option>
                <option value="2005">2005</option>
                <option value="2010">2010</option>
                <option value="2015">2015</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
              </select>
              <select value={this.value} name="triggers" onChange={this.onChange}> Pick a triggers
                <option value="violence">violence</option>
                <option value="death">death</option>
                <option value="horror">horror</option>
                <option value="blood">blood</option>
                <option value="suicide">suicide</option>
                <option value="kidnapping">kidnapping</option>
                <option value="war">war</option>
                <option value="vampire">vampire</option>
                <option value="Animal cruelty">Animal cruelty</option>
                <option value="No trigger warning">No trigger warning</option>
              </select>
              <Button type='Submit' variant="contained" color="primary">
                Submit
              </Button>
            </form>
            <div className="quiz-recommendation">
                  {
                      this.state.recommendations.map(rec=>(
                          <div key={rec.book_name}className="book-recommendation">
                          <h2> Title: {rec.book_name}</h2>
                          <h2> Author: {rec.author}</h2>
                          <h2> Rating: {rec.rating}</h2>
                          <h2> Age Range: {rec.age_range}</h2>
                          <h2> Page: {rec.maximum_pages}</h2>
                          <h2> Publication Date: {rec.publication_date}</h2>
                          <h2> Best Seller: {rec.best_seller}</h2>
                          <h2>Series: {rec.series}</h2>
                          <h2><a href={rec.LinkToAmazon} target="_blank"> Purchase Link</a> </h2>
                          <img src={rec.PictureLink} height={400} witdth={400} />
                          </div>
                        ))
                  }
            </div>
          </div>
        </div>

      );
  }
}

export default QuizRecs;


/*
class QuizRecs extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }
    
    render() {
     
     return (  
        <div>
         Take a quiz
         <Quiz quiz={quiz}/>
        </div>
    );
    }
}


*/
