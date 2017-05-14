import base from '../../shared/Base';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class LoginPage extends Component {

    authHandler(error, user) {
        if(error) console.log(error);
        console.log(user);
    }

    _handleSubmit(e) {
        e.preventDefault();
        base.authWithPassword({
            email: ReactDOM.findDOMNode(this.refs.email).value, 
            password: ReactDOM.findDOMNode(this.refs.password).value
        }, this.authHandler); 
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit.bind(this)}>
                <input type='text' ref='email' />
                <input type='text' ref='password' />
                <input type='submit' value='Submit'/>
            </form>
        );
    }
}

export default LoginPage;