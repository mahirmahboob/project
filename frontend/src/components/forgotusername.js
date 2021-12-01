import React, { Component } from "react";
import { Footer } from "./footer";


const appStyle = {
    height: '250px',
    display: 'flex'
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    borderRadius: '5px',
    background: '#ebd0b9',
    width: '400px',
    display: 'block'
};

const labelStyle = {
    margin: '10px 0 5px 0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '15px',
};

const inputStyle = {
    margin: '5px 0 10px 0',
    padding: '0px', 
    border: '1px solid #bfbfbf',
    borderRadius: '0px',
    boxSizing: 'border-box',
    width: '100%'
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 7px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#aaa',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};

class forgotusername extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            favoriteTeacher: "",
            username: [],
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});

    }

    handleForgotUsername = (e) => {
        e.preventDefault();
        

        fetch('/forgotusername', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                favoriteTeacher: this.state.favoriteTeacher,
                email: this.state.email,


    })
        }).then(response=>response.json()) //converts to js. has the parsed data from the server and that becomes the parameter for the next .then
       .then(data=>{
        this.setState({
            username:data //data is response.json
           })
       })
    } 
// End of handlesubmit


    render() {
        const username = this.state.username;
        const favoriteTeacher = this.state.favoriteTeacher;
        const email = this.state.email;
   

     return ( 
    <div>
     <div style={{padding: 10}}>
        <div style={appStyle}>
            <div style={formStyle}>
            <b>Forgot Username</b>
            <br/>
            <br/>
            <form onSubmit={this.handleForgotUsername}>
                <table border="0">
                    <tbody>
                        <tr>
                            <td>Email:</td>
                            <div style={inputStyle}>
                                <input type="email" name="email" size="20" autocorrect="off" spellcheck="false"
                                       autocapitalize="off" value={email} onChange={this.handleChange}/>
                            </div>
                        </tr>
                        <tr>
                            <td>Your Favorite Teacher:</td>
                            <div style={inputStyle}>
                                <input type="text" name="favoriteTeacher" size="20"
                                       required value={favoriteTeacher} onChange={this.handleChange}/>
                            </div>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input style={submitStyle} type="submit" value="Submit"/>
            </form>
            <a href="forgot">Forgot your password?</a>
    <div className="forgot_username">
        {
            this.state.username.map(rec=>(
                <div key={rec.username}className="username">
                <h2> Username: {rec.username}</h2>
                </div>
            ))
        }
    </div>
            <br/>
            </div>
        </div>
        </div>
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

export default forgotusername;