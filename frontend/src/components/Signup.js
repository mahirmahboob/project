import React, { Component } from "react";

// const url = '/rest/signup'
const appStyle = {
    height: '250px',
    display: 'flex'
};

const formStyle = {
    margin: 'auto',
    padding: '10px',
    borderRadius: '5px',
    background: '#ebd0b9',
    width: '340px',
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
class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            Confirmpassword: "",
            Your_Favorite_Dish: "",
            account: {},
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmitSignup = (e) => {
        e.preventDefault();

        fetch('/rest/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                Confirmpassword: this.state.Confirmpassword,
                Your_Favorite_Dish: this.state.Your_Favorite_Dish,
                email: this.state.email,
    })
        }).then(response => {
            if (response.status === 404) {
                alert("That username already exist, please update your username");
            }
            else if (response.status ===406)
            {
                alert("Your Password and Confirm Password does not match");
            }
            else if (response.status === 400)
            {
                alert("Password and Confirm Password can not be empty");
            }

            else if (response.status ===416)
            {
                alert("Username and Password can not be less than seven character long");
            }

            else if (response.status ===409)
            {
                alert("Favorite Teacher has to be atleast four character long");
            }

         else if (response.status ===417)
            {
                alert("Email field can not be empty and it has to be atleast 7 characters long");
            }

            else if (response.status === 201) {
            alert("Succesfully Signup Up!");
            window.location.href =  'http://localhost:3000/login';

            }
            })
            .catch(function(error) {
            
                console.log('Request failed', error)
            });
    } 

    render() {
        const username = this.state.username;
        const password = this.state.password;
        const Confirmpassword = this.state.Confirmpassword;
        const Your_Favorite_Dish = this.state.Your_Favorite_Dish;
        const email = this.state.email;
     return (  
        <div style={{padding: 10}}>
            <div style={appStyle}>
                <div style={formStyle}>
                    <b>Create an Account</b>
                    <br/>
                    <b>Join our community</b>
                    <br/>
                    <br/>
                    <form onSubmit={this.handleSubmitSignup}>
                        <table border="0">
                            <tbody>
                                
                                <tr>
                                    <td>Username:</td>
                                    <td>
                                        <input type="username" name="username" size="20" autocorrect="off" spellcheck="false"
                                            autocapitalize="off" value={this.state.username} onChange={this.handleChange}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>
                                        <input type="email" name="email" size="20" autocorrect="off" spellcheck="false"
                                            autocapitalize="off" value={this.state.email} onChange={this.handleChange}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password:</td>
                                    <td>
                                        <input type="password" name="password" size="20"
                                            required value={this.state.password} onChange={this.handleChange}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Confirm Password:</td>
                                    <td>
                                        <input type="password" name="Confirmpassword" size="20"
                                            required value={this.state.Confirmpassword} onChange={this.handleChange}/>
                                    </td>
                                </tr>
                                                                <tr>
                                    <td>Who is your Favorite Teacher:</td>
                                    <td>
                                        <input type="text" name="Your_Favorite_Dish" size="20"
                                            required value={this.state.Your_Favorite_Dish} onChange={this.handleChange}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                        <input style={submitStyle} type="submit" value="Submit"/>
                        <div>
                        Already have an account? 
                            <a href="/login"> Log in Here!</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default Signup;

// import React, { Component } from "react";

// // const url = '/rest/login'

// class Signup extends Component {
//     constructor() {
//         super();
//         this.state = {
           
//         }
//     }
    

//     render() {
     
//      return (  
//         <div>
//          Signup
//         </div>
//     );
//     }
// }

// export default Signup;