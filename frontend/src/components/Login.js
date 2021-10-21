import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { Link } from "react-router-dom";

// const url = '/rest/login'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            user:[],
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
            window.location.href =  'http://localhost:3000/login';
            
            }
            else
            {
                
                //alert("successfully Logged In");
                console.log("sucessfull");
                this.props.history.push(`/userdashboard/${this.state.username}`, {state: this.state.username});
                // this is just a test. we redirect the user to the login page. When he have the dashboard, 
                // we will redirect the user to the proper webpage
                //window.location.href = 'http://localhost:3000/userdashboard';
            }
            })
            .catch(function(error) {
            
                alert("Something went wrong");
            });
        }
    //handle submitlogin

    render() {
     const username = this.state.username;
     const password = this.state.password;
     return (  <div>
            <b>Log in</b>
            <br/>
            <br/>
            <form onSubmit={this.handleSubmitLogin}>
                <table border="0">
                    <tbody>
                        <tr>
                            <td>Username:</td>
                            <td>
                                <input type="username" name="username" size="20" autoCorrect="off" spellCheck="false"
                                       autoCapitalize="off" value={username} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Password:</td>
                            <td>
                                <input type="password" name="password" size="20"
                                       required value={password} onChange={this.handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                 <input type="submit" value="Submit"/>
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
        );
    }
}

export default Login;

// import React, { Component } from "react";

// // const url = '/rest/login'

// class Login extends Component {
//     constructor() {
//         super();
//         this.state = {
           
//         }
//     }
    

//     render() {
     
//      return (  
//         <div>
//          Login
//         </div>
//     );
//     }
// }

// export default Login;


