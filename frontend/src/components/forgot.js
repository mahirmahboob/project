import React, { Component } from "react";


class forgot extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            Your_Favorite_Dish: "",
            New_password: "",
            New_passwordConfirm: "",
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});

    }

    handleSubmitSignup = (e) => {
        e.preventDefault();
        

        fetch('/forgot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                Your_Favorite_Dish: this.state.Your_Favorite_Dish,
                New_password: this.state.New_password,
                New_passwordConfirm: this.state.New_passwordConfirm,

    })
        }).then(response => {
            if (response.status ===406)
            {
                alert("New_Password & New_passwordConfirm needs to match");
            }
            else if (response.status === 400)
            {
                alert("Can not leave any of the field blank");
            }

            else if (response.status === 416)
            {
                alert("Password and Confirm password has to be atleast Seven characters long");
            }

            else if (response.status === 404)
            {
                alert("Incorrect username or security answer");
            }

            else if (response.status === 201) {
            alert("Password was updated, Please login again with the new password");
            window.location.href =  'http://localhost:3000/login';
            }
            })
            .catch(function(error) {
            
                console.log('Request failed', error)
            });
    } 
// End of handlesubmit


    render() {
        const username = this.state.username;
        const Your_Favorite_Dish = this.state.Your_Favorite_Dish;
        const New_password = this.state.New_password;
        const New_passwordConfirm = this.state.New_passwordConfirm;
   

     return (  
        <div>
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
                            <td>Your_Favorite_Dish:</td>
                            <td>
                                <input type="Your_Favorite_Dish" name="Your_Favorite_Dish" size="20" autoCorrect="off" spellCheck="false"
                                       autoCapitalize="off" value={Your_Favorite_Dish} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>New_password:</td>
                            <td>
                                <input type="password" name="New_password" size="20" autoCorrect="off" spellCheck="false"
                                       autoCapitalize="off" value={New_password} onChange={this.handleChange}/>
                            </td>
                        </tr>
                       <tr>
                            <td>New_passwordConfirm:</td>
                            <td>
                                <input type="password" name="New_passwordConfirm" size="20" autoCorrect="off" spellCheck="false"
                                       autoCapitalize="off" value={New_passwordConfirm} onChange={this.handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            <br/>
            <a href="forgotusername">Forgot your username?</a>
            <br/>
        </div>
        );
    }
}

export default forgot;

