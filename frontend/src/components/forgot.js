import React, { Component } from "react";

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

    handleForgotPassword = (e) => {
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
     <div style={{padding: 10}}>
        <div style={appStyle}>
            <div style={formStyle}>
            <b>Forgot Password</b>
            <br/>
            <br/>
            <form onSubmit={this.handleForgotPassword}>
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
                            <td>New Password:</td>
                            <div style={inputStyle}>
                                <input type="password" name="New_password" size="20"
                                       required value={New_password} onChange={this.handleChange}/>
                            </div>
                        </tr>
                        <tr>
                            <td>Confirm New Password:</td>
                            <div style={inputStyle}>
                                <input type="password" name="New_passwordConfirm" size="20"
                                       required value={New_passwordConfirm} onChange={this.handleChange}/>
                            </div>
                        </tr>
                        <tr>
                            <td>Who is your favorite Teacher:</td>
                            <div style={inputStyle}>
                                <input type="text" name="Your_Favorite_Dish" size="20"
                                       required value={Your_Favorite_Dish} onChange={this.handleChange}/>
                            </div>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input style={submitStyle} type="submit" value="Submit"/>
            </form>
            <br/>
             <a href="forgotusername">Forgot your username?</a>
            <br/>
            <br/>
            </div>
        </div>
        </div>
        </div>
        );
    }
}

export default forgot;
