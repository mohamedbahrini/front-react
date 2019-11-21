import React, { Component } from 'react';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Users from './components/users';
import Home from './components/home';
import Login from './components/login';

class App extends Component {
  state = {
    loggedIn: false
  }

  Users() {
    return <Users />;
  }

  Navbar = () => {
    if (this.state.loggedIn) {
      return <Navbar />;
    }
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route path={'/login'} component={Login} />
            <Route path={'/home'} component={Home} />
            <Route path="/users"> <Users /> </Route>
            <Route exact path="/" render={() => (
              this.state.loggedIn ? (<Redirect to="/home" />) : (<Redirect to="/login" />))}
            />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }

}

export default App;
