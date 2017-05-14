import React, { Component } from 'react';
import base from '../../../shared/Base';
import RaisedButton from 'material-ui/RaisedButton'
import { Row, Col } from 'react-flexbox-grid'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

class NewChat extends Component {

    constructor(props) {
        super(props);
        this._handleChangeMessage = this._handleChangeMessage.bind(this);
    }

    componentWillMount() {
        this.state = {
            message: undefined,
            title: undefined
        }
    }

    _newChat(e) {

        const messageValue = this.state.message;

        base.post('chats', {
            data: this.props.chats.concat([{
                message: messageValue
            }]),
            context: this,
            then: () => {
                console.log('Posted');
            }
        });

        this.setState({
            message: '',
            title: ''
        });
    }

    _handleChangeMessage(e) { this.setState({message: e.target.value}) }

    render() {
        const { title, message } = this.state;
        return (
            <ValidatorForm onSubmit={ this._newChat.bind(this) }>
                <Row>
                    <Col xs={10}>
                        <TextValidator 
                            name='message' 
                            validators={['required']} 
                            errorMessages={['This field is requried']} 
                            fullWidth
                            onChange={this._handleChangeMessage}
                            value={message}
                            hintText='Message' />
                    </Col>
                    <Col xs={2}>
                        <RaisedButton style={{float: 'right'}} secondary type='submit' label="Chat" />
                    </Col>
                </Row>
            </ValidatorForm>
        );
    }
}

export default NewChat;