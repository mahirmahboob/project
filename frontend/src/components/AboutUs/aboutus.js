import React, { Component } from "react";
import "./aboutus.css"
import Card from "./card"
import team from "./data"

class AboutUs extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {

        return (
            <div>
                <h1 className="head">AboutUs</h1>
                {team.map((person) => {
                   return(
                    <>
                    <div className="container">
                        <img className="row item" src={`${process.env.PUBLIC_URL}/img/${person.img1}`} alt={`pic of ${person.name}`} />
                        <Card name={person.name} description={person.description} />
                        <img className="row item" src={`${process.env.PUBLIC_URL}/img/${person.img2}`} alt="pic of book" />
                    </div>
                    <hr style={{ height: "4px", borderWidth: 0, color: "#F8cbad" }} />
                    </>
                   )
                })}
        
            </div>

        );
    }
}

export default AboutUs;