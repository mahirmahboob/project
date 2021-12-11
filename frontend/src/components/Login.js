import React, { Component } from "react";
import { PropTypes } from 'react'
import { Footer } from "./footer";

// import { Link } from "react-router-dom";

// const url = '/rest/login'
const appStyle = {
    height: '250px',
    display: 'flex'
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    borderRadius: '5px',
    background: '#ebd0b9',
    width: '290px',
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

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.state = {
            username: "",
            password: "",
            signupEmail: "",
            signupPassword: "",
            account: {},
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmitLogin = (e) => {
        e.preventDefault();
    

        fetch('/rest/login', {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        }).then(response => {

            if (response.status === 401) {
            alert("Wrong combination, please try again");
            window.location.href =  'http://localhost:3000';
            
            }
            else if (response.status === 201)
            {
                this.props.handleLogin();
                const users = this.state.username;
                localStorage.setItem('current_user', JSON.stringify(users))
                window.location.href = `http://localhost:3000/dashboard/${this.state.username}`;
                //this.props.history.push(`/dashboard/${this.state.username}`, {state: this.state.username});
            }
            })
           .catch(function(error) {
            
                alert(error);
            });
        
        }

    render() {
     const username = this.state.username;
     const password = this.state.password;
     return ( 
    <div>
     <div style={{padding: 10}}>
        <div style={appStyle}>
            <div style={formStyle}>
            <b>Log in</b>
            <br/>
            <br/>
            <form onSubmit={this.handleSubmitLogin}>
                <table border="0">
                    <tbody>
                        <tr>
                            <td>Username:</td>
                            <div style={inputStyle}>
                                <input type="username" name="username" size="20" autocorrect="off" spellcheck="false"
                                       autocapitalize="off" value={username} onChange={this.handleChange}/>
                            </div>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <div style={inputStyle}>
                                <input type="password" name="password" size="20"
                                       required value={password} onChange={this.handleChange}/>
                            </div>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input style={submitStyle} type="submit" value="Submit"/>
            </form>
            <a href="forgot">Forgot your password?</a>
            <br/>
             <a href="forgotusername">Forgot your username?</a>
            <br/>
            <div>
                Don't have an account? 
                <a href="/signup"> Sign Up Here!</a>
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

export default Login;