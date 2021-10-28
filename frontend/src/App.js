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
import userdashboard from "./components/dashboard/userdashboard";
import forgot from "./components/forgot";
import forgotusername from "./components/forgotusername";
import blog from "./components/blog/blog";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
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
              <Route path="/login" component={Login} />
              <Route path="/searchdir" component={SearchPage} />
              <Route path="/recGenre" component={GenreRecs} />
              <Route path="/recQuiz" component={QuizRecs} />
              <Route path="/recSurpriseMe" component={SurpriseMeRecs} />
              <Route path="/userdashboard" component={userdashboard} />
              <Route path="/forgot" component={forgot} />
              <Route path="/forgotusername" component={forgotusername} />
              <Route path="/blog" component={blog} />

              {/* <Route component={Notfound} /> */}
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;

// import './App.css';
// import { MainContainer } from './mainContainer';
// import Navbar from './components/navbar/navbar';

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <MainContainer/>
//     </div>
//   );
// }

// export default App;
