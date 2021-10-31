import React, { Component } from "react";
import Button from 'react-bootstrap/Button'; 
import './quiz.css';
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
        <body className="body">
        <div className="session">
        <h1 className='header'>Quiz</h1>
          <div className="register-form">
            <form onSubmit={this.onSubmit}>
              <div className="question">Pick the genre:</div>
              <div className="selected">
              <select className="itself" value={this.value} name="genre" onChange={this.onChange}> 
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
              </div>
              <div className="question">Pick a age range:</div>
              <div className="selected">
              <select className="itself" value={this.value} name="age" onChange={this.onChange}> 
                <option value="child">child</option>
                <option value="young adult">young adult</option>
                <option value="adult">adult</option>
                <option value="all">all</option>
              </select>
              </div>
              <div className="question">Pick a page range:</div>
              <div className="selected">
              <select className="itself" value={this.value} name="page" onChange={this.onChange}> 
                <option value="100">100</option>
                <option value="150">150</option>
                <option value="200">200</option>
                <option value="250">250</option>
                <option value="300">300</option>
                <option value="350">350</option>
                <option value="400">400+</option>
              </select>
              </div>
              <div className="question">Pick a publication date:</div>
              <div className="selected">
              <select className="itself" value={this.value} name="date" onChange={this.onChange}> 
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
              </div>
              <div className="question">Select any triggers:</div>
              <div className="selected">
              <select className="itself" value={this.value} name="triggers" onChange={this.onChange}> 
                <button value="violence">violence</button>
                <button value="death">death</button>
                <button value="horror">horror</button>
                <button value="blood">blood</button>
                <option value="suicide">suicide</option>
                <option value="kidnapping">kidnapping</option>
                <option value="war">war</option>
                <option value="vampire">vampire</option>
                <option value="Animal cruelty">Animal cruelty</option>
                <option value="No trigger warning">No trigger warning</option>
              </select>
              </div>
              <div className="flx">
              <div className="butt">
                <Button class="butt" type='Submit' variant="contained" style={{color:"rgb(250, 233, 228)"}}>Submit</Button>
              </div>
              </div>
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
                          <h2>Synopsis: {rec.Synopsis}</h2>
                          <h2><a href={rec.LinkToAmazon} target="_blank"> Purchase Link</a> </h2>
                          <img src={rec.PictureLink} height={400} witdth={400} />
                          </div>
                        ))
                  }
            </div>
          </div>
        </div>
        </body>
      );
  }
}

export default QuizRecs;