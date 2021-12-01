import React, { Component } from "react";
import "./aboutus.css"
import Card from "./card"
import team from "./data"
import { Footer } from "../footer";


class AboutUs extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <div style = {{backgroundColor:'#f5f5f5'}}>
                    <div style={{display: 'flex'}}> 
                        <div style = {{backgroundColor:'#ffffff', width:'40%', height:'740px'}}>
                            <img style={{ width: '350px',height: '390px', paddingTop:'290px'}}
                                alt="logo of the about us"
                                src="/img/AboutUs.png"
                            />
                        </div>
                        <div style = {{backgroundColor:'#776464', width:'70%', paddingLeft:'100px', paddingRight:'150px', paddingTop:'150px'}}> 
                                <div style={{textAlign:'left', color:'whitesmoke', fontSize:'45px',fontFamily: "Lucida Console"}}>
                                Hi! Welcome to Bookmarked
                                </div>
                                <br/>
                                <div style={{textAlign:'left', color:'whitesmoke', fontSize:'25px',fontFamily: "Lucida Console"}}>
                                <u>Our Mission</u>
                                </div>
                                <br/>
                                <div style={{textAlign:'left', color:'whitesmoke', fontSize:'25px'}}>
                                We are a book recommendation created just for you. We created bookmarked so readers at all levels can find books that they would enjoy so they can fill their bookshelves with their favorite reads. Whether you are a beginner reader or already a avid reader there is something for you here at Bookmarked. We want Bookmarked to be the place where people go to to push their literary horizons.
                                </div>
                                <br/>
                                <div style={{textAlign:'left', color:'whitesmoke', fontSize:'25px'}}>
                                One of our top most priorities as the creators of this website is to foster a community of literary enthusiats. We aim to connect a vivacious and thriving community of readers who have a space to share their views and ideas on books, reviews and much more.  
                                </div>
                            
                        </div>

                    </div>
          
                    </div>
                    <br/> 
                    <br/> 
                    <div style={{textAlign:'center', color:'#ab771a', fontSize:'50px',fontFamily: "Lucida Console"}}>
                     Meet our Team!
                    </div> 
                {team.map((person) => {
                   return(
                    <div className="container2">
                        <img className="row item" src={`${process.env.PUBLIC_URL}/img/${person.img1}`} alt={`pic of ${person.name}`} />
                        <Card name={person.name} description={person.description} />
                        <img className="row item" src={`${process.env.PUBLIC_URL}/img/${person.img2}`} alt="pic of book" />
                    </div>
                   )
                })}
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <Footer/>
        
            </div>

        );
    }
}

export default AboutUs;

