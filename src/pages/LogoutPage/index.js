import base from '../../shared/Base';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class LogoutPage extends Component {

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

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

    componentWillMount() {
        base.unauth();
        this.context.router.push('/login')
    }

    render() {
        return (
            <p>Redirecting to login page... <Link to='/login'>Login Again.</Link></p>
        )
    }

}

export default LogoutPage;