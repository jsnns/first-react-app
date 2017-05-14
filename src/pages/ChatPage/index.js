import injectTapEventPlugin from 'react-tap-event-plugin';
import Container from './components/Container';
import { Col, Row, Grid } from 'react-flexbox-grid';
import NewChat from './components/NewChat'
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import base from '../../shared/Base'

class ChatPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      uid: null
    };
  }

  componentWillMount() {
    base.bindToState('chats', {
      context: this,
      state: 'messages',
      asArray: true
    });
  }
  
  render() {
    return (
        <div>
            <Grid fluid>
                <Container />
                <NewChat chats={ this.state.messages } />
            </Grid>
        </div>
    );
  }
}

export default ChatPage;