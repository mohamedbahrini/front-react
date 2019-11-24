import React, { Component } from 'react';
import AuthenticationService from '../services/authenticationService';

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            fields: {
                username: '',
                password: ''
            },
            errors: {}
        }
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //username
        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "Cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //password
        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "Cannot be empty";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    loginSubmit = (e) => {
        e.preventDefault();

        if (this.handleValidation()) {
            console.log("Form submitted", this.state.fields);
            AuthenticationService.saveToken('token');
            this.props.history.push('/home');
        } else {
            console.log("Form has errors.", this.state.fields);
        }

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3 mt-5">
                <form name="loginform" onSubmit={this.loginSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Login</label>
                        <input type="text" className="form-control" refs="username" placeholder="Enter login" onChange={this.handleChange.bind(this, "username")} value={this.state.fields["username"]} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" refs="password" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;
