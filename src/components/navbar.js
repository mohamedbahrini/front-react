import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AuthenticationService from '../services/authenticationService';
import { Redirect } from "react-router-dom";

class Navbar extends Component {

    logout = () => {
        AuthenticationService.logout();
        this.props.history.push('/login');
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Complete</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">users</Link>
                        </li>
                    </ul>
                    <button className="btn btn-sm" onClick={this.logout}>logout</button>
                </div>
            </nav>
        );
    }


}

export default Navbar;