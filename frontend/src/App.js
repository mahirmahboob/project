import React, { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Notfound from "./Notfound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./components/homepage/homepage";
import { SearchPage } from "./components/searchPage/searchPage";
import GenreRecs from "./components/genre/genre";
import QuizRecs from "./components/quiz/quiz";
import SurpriseMeRecs from "./components/surpriseMe/surpriseMe";
import dashboard from "./components/dashboard/dashboard";
import forgot from "./components/forgot";
import forgotusername from "./components/forgotusername";
import blog from "./components/blog/blogmain";
import AboutUs from "./components/AboutUs/aboutus.js";
import { PropTypes } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount(){
    const userfromstorage=localStorage.getItem("current_user");
    if(userfromstorage){
      this.setState({
        isLoggedIn:true
      })
    }
  }

  handleLogin() {
    console.log("in handle login:  ");
    this.setState({
      isLoggedIn: true,
    });
  }


  logout=() =>{
    this.setState({
      isLoggedIn: false,
    });
    localStorage.removeItem("current_user");
  }

  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
          <Navbar isLoggedIn={this.state.isLoggedIn} logout={this.logout}/>
            <div> 
              <Route
                exact
                path="/"
                render={(props) => (
                  <Login
                    {...props}
                    isLoggedIn={this.state.isLoggedIn}
                    handleLogin={this.handleLogin}
                  />
                )}
              />
              <Route
                exact
                path={"/signup"}
                render={(props) => (
                  <Signup
                    {...props}
                    isLoggedIn={this.state.isLoggedIn}
                    handleLogin={this.handleLogin}
                  />
                )}
              />
              <Route path="/home" component={Homepage} />
              <Route path="/searchdir" component={SearchPage} />
              <Route path="/recGenre" component={GenreRecs} />
              <Route path="/recQuiz" component={QuizRecs} />
              <Route path="/recSurpriseMe" component={SurpriseMeRecs} />
              <Route path="/dashboard" component={dashboard} />
              <Route path="/forgot" component={forgot} />
              <Route path="/forgotusername" component={forgotusername} />
              <Route path="/blog" component={blog} />
              <Route path="/AboutUs" component={AboutUs} />
              

              {/* <Route component={Notfound} /> */}
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;