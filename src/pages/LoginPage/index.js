import base from '../../shared/Base';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Col, Row } from 'react-flexbox-grid'
import Divider from 'material-ui/Divider'

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    authHandler(error, user) {
        if(error) console.log(error);
        else this.context.router.push('/chat')
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    compoenentDidMount() {
        const user = window.localStorage.getItem('USER')
        console.log(user);
        if(user) {
            this.context.router.push('/chat')
        }
    }

    _handleSubmit() {
        base.authWithPassword({
            email: this.state.email,
            password: this.state.password
        }, this.authHandler.bind(this)); 
    }
    
    _handleChangePassword(e) { this.setState({ password: e.target.value }) }
    _handleChangeEmail(e) { this.setState({ email: e.target.value }) }

    render() {

        const { email, password } = this.state;

        return (
            <Grid fluid>
                <ValidatorForm ref='form' onSubmit={this._handleSubmit.bind(this)}>
                    <Row>
                        <Col xs={10} xsOffset={1} md={6} mdOffset={3}>
                            <Row center='xs'>
                                <h2>Login to 'Chat Place'</h2>
                            </Row>
                            <Row><TextValidator
                                fullWidth
                                name='email'
                                value={ email }
                                onChange={ this._handleChangeEmail.bind(this) }
                                validators={['required', 'isEmail']}
                                errorMessages={['This field is required', 'Not a valid email']}
                                hintText='Email' /> </Row>
                            <Row><TextValidator
                                fullWidth
                                value={ password }
                                onChange={ this._handleChangePassword.bind(this) }
                                type='password'
                                name='password'
                                validators={['required']}
                                errorMessages={['This field is required']}
                                hintText='Password' /> </Row>
                            <Row> <RaisedButton style={{marginTop: '20px', float: 'right'}} secondary type='submit' label='Login' /> </Row>
                        </Col>
                    </Row>
                </ValidatorForm>
            </Grid>
        );
    }
}

export default LoginPage;