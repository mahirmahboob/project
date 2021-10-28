import React, { Component } from "react";
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
    constructor() {
        super();
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
            window.location.href =  'http://localhost:3000/login';
            
            }
            else
            {
                
                //alert("successfully Logged In");
                this.props.handleLogin()
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
                            <td>username:</td>
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