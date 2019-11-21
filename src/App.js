import React, { Component } from 'react';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Users from './components/users';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path={'/home'} component={Home} />
            <Route path="/users">
              <Users />
            </Route>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }

  Users() {
    return <Users />;
  }

}

export default App;
