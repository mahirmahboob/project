import React, { Component } from "react";
import { SocialIcon } from 'react-social-icons';

export class Footer extends Component {
    render () {
        return (
            <div style={{backgroundColor:'lightgray'}}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 0 , height :'5px', backgroundColor:'lightgray', paddingTop:'20px'}}>
                <div style={{color:'black', fontSize:'15px',fontFamily: "Lucida Console", paddingLeft:'350px'}}>
                    <u>Resources</u>
                    <br/>
                    <a href="/aboutus">About Us</a>
                    <br/>
                    <a href="/aboutus">Admin</a>
                </div>
                <div style={{color:'black', fontSize:'15px',fontFamily: "Lucida Console", paddingLeft:'100px'}}>
                    <u>Account</u>
                    <br/>
                    <a href="/signup">Sign Up</a>
                    <br/>
                    <a href="/login">Log in</a>
                </div>
                <div style={{color:'black', fontSize:'15px',fontFamily: "Lucida Console", paddingRight:'100px'}}>
                    <u>Links</u>
                    <br/>
                    <a href="/recGenre">Genre</a>
                    <br/>
                    <a href="/recSurpriseMe">Random</a>
                    <br/>
                    <a href="/recQuiz">Quiz</a>
                </div>
                <div style={{color:'black', fontSize:'15px',fontFamily: "Lucida Console", paddingRight:'350px'}}>
                    <u>Extra</u>
                    <br/>
                    <a href="/blog">Blog</a>
                    <br/>
                    <a href="/searchdir">Search</a>
                </div>
            </div>
            <div style={{ paddingTop:'100px'}}>
            <SocialIcon url="https://bookmarked.com" network="twitter" bgColor="darkgray" style={{ height: 35, width: 35}}/>&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://bookmarked.com" network="facebook" bgColor="darkgray" style={{ height: 35, width: 35 }}/>&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://bookmarked.com" network="linkedin" bgColor="darkgray" style={{ height: 35, width: 35 }}/>&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://bookmarked.com" network="instagram" bgColor="darkgray" style={{ height: 35, width: 35 }}/>&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://bookmarked.com" network="youtube" bgColor="darkgray" style={{ height: 35, width: 35 }}/>&nbsp;&nbsp;&nbsp;
            <SocialIcon url="https://bookmarked.com" network="pinterest" bgColor="darkgray" style={{ height: 35, width: 35 }}/>&nbsp;&nbsp;&nbsp;
            </div>
            <div style={{ fontFamily: "Lucida Console", paddingTop:'15px',paddingBottom:'15px', color:'black'}}> Copyright &#169; 2021 Bookmarked</div>
            </div>
        )
    }
}
