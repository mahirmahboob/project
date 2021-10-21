import React, { Component } from "react";

// const url = '/rest/signup'

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
            Your_Favorite_Dish: "",
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
                Your_Favorite_Dish: this.state.Your_Favorite_Dish,
                email: this.state.email,
    })
        }).then(response => {
            if (response.status === 404) {
                alert("That username already exist, please update your username");
            }
            else if (response.status ===406)
            {
                alert("Your Password and passwordConfirm does not match");
            }
            else if (response.status === 400)
            {
                alert("Password and ConfirmPassword can not be empty");
            }

            else if (response.status ===416)
            {
                alert("Username and Password can not be less than seven character long");
            }

            else if (response.status ===409)
            {
                alert("Favorite dish has to be atleast four character long");
            }

         else if (response.status ===417)
            {
                alert("Email field can not be empty and it has to be atleast 7 characters long");
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
        const passwordConfirm = this.state.passwordConfirm;
        const Your_Favorite_Dish = this.state.Your_Favorite_Dish;
        const email = this.state.email;

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
                            <td>email:</td>
                            <td>
                                <input type="email" name="email" size="20" autoCorrect="off" spellCheck="false"
                                       autoCapitalize="off" value={email} onChange={this.handleChange}/>
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
                        <tr>
                            <td>Your_Favorite_Dish:</td>
                            <td>
                                <input type="SequrityQuestion" name="Your_Favorite_Dish" size="20" autoCorrect="off" spellCheck="false"
                                       autoCapitalize="off" value={Your_Favorite_Dish} onChange={this.handleChange}/>
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


