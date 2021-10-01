import React, { Component } from "react";

// const url = '/rest/signup'

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            passwordConfirm: "",
            //account: {},
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});

    }

    handleSubmitSignup = (e) => {
        e.preventDefault();
        
        /*
        var formData = new FormData();
        formData.append('username', this.state.username);
        formData.append('password', this.state.password);
        formData.append('passwordConfirm', this.state.passwordConfirm);

        const requestOptions = {
            method: 'POST',
            body: formData
        };

        fetch('http://localhost:5000/rest/register', requestOptions)
            .then(response => {
                console.log(response.status);
                console.log(response.data);
                this.setState({account: response.data});
                return response.json();
            })
            .catch(function(error) {
                console.log('Request failed', error)
            });
        alert("Succesfully Signup Up!");
        */

        fetch('/rest/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                passwordConfirm: this.state.passwordConfirm,
    })
        }).then(response => {
            if (response.status === 404) {
                alert("That username already exist, please update your username");
            }
            else if (response.status ===406)
            {
                alert("Your Password and passwordConfirm does not match");
            }

            else if (response.status === 201) {
            alert("Succesfully Signup Up!");
            }
            })
            .catch(function(error) {
            
                console.log('Request failed', error)
            });
    } 
// End of handlesubmit


    render() {
        const username = this.state.username;
        const password = this.state.password;
        const passwordConfirm = this.state.passwordConfirm

     return (  
        <div>
            <b>Create an Account</b>
            <br/>
            <b>Join our community</b>
            <br/>
            <br/>
            <form onSubmit={this.handleSubmitSignup}>
                <table border="0">
                    <tbody>
                        <tr>
                            <td>username:</td>
                            <td>
                                <input type="username" name="username" size="20" autoCorrect="off" spellCheck="false"
                                       autoCapitalize="off" value={username} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>password:</td>
                            <td>
                                <input type="password" name="password" size="20" autoCorrect="off" spellCheck="false"
                                       autoCapitalize="off" value={password} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>passwordConfirm:</td>
                            <td>
                                <input type="password" name="passwordConfirm" size="20" autoCorrect="off" spellCheck="false"
                                       autoCapitalize="off" value={passwordConfirm} onChange={this.handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input type="submit" value="Submit"/>
                <div>
                Already have an account? 
                    <a href="/login"> Log in Here!</a>
                </div>
            </form>
        </div>
        );
    }
}

export default Signup;


