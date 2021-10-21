import React, { Component } from "react";

class forgotusername extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            Your_Favorite_Dish: "",
            username: [],
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});

    }

    handleSubmitSignup = (e) => {
        e.preventDefault();
        

        fetch('/forgotusername', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                Your_Favorite_Dish: this.state.Your_Favorite_Dish,
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
        const Your_Favorite_Dish = this.state.Your_Favorite_Dish;
        const email = this.state.email;
   

     return (  
        <div>
            <br/>
            <form onSubmit={this.handleSubmitSignup}>
                <table border="0">
                    <tbody>
                        <tr>
                            <td>email:</td>
                            <td>
                                <input type="email" name="email" size="20" autoCorrect="off" spellCheck="false"
                                       autoCapitalize="off" value={email} onChange={this.handleChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Your_Favorite_Dish:</td>
                            <td>
                                <input type="Your_Favorite_Dish" name="Your_Favorite_Dish" size="20" autoCorrect="off" spellCheck="false"
                                       autoCapitalize="off" value={Your_Favorite_Dish} onChange={this.handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            <a href="forgot">Forgot your password?</a>
            <br/>
    <div className="forgot_username">
        {
            this.state.username.map(rec=>(
                <div key={rec.username}className="username">
                <h2> Username: {rec.username}</h2>
                </div>
            ))
        }
    </div>
        </div>
        );
    }
}

export default forgotusername;