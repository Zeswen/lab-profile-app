import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthService from "./components/auth/AuthService";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
    this.service = new AuthService();
    this.isLoggedIn();
  }

  getUser = user => {
    this.setState({
      ...this.state,
      user
    });
  };

  isLoggedIn = () => {
    this.service.loggedin().then(user =>
      this.setState({
        ...this.state,
        user
      })
    );
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/signup"
            render={() => <Signup getUser={this.getUser} />}
          />
          <Route
            exact
            path="/login"
            render={() => <Login getUser={this.getUser} />}
          />
          <Route
            exact
            path="/profile"
            render={() => (
              <Profile user={this.state.user} getUser={this.getUser} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
