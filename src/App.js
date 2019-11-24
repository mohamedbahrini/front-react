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


import AuthenticationService from './services/authenticationService';

class App extends Component {
  
  state = {
    isAuthenticated : AuthenticationService.isAuthenticated()
  }

  renderUsers() {
    return <Users />;
  }

    

  render() {
    let navbar;
    if (this.state.isAuthenticated) {
      navbar = <Navbar />;
    }

    return (
      <Router>
        {navbar}
        <React.Fragment>
          <Switch>
            <Route path={'/login'} component={Login} />
            <Route path={'/home'} component={Home} />
            <Route path={'/users'} component={Users} />
            <Route exact path="/" render={() => (
              this.state.isAuthenticated ? (<Redirect to="/home" />) : (<Redirect to="/login" />))}
            />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }

}

export default App;
