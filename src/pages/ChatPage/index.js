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

    const uid = window.localStorage.getItem('USER')

    this.state = {
      messages: [],
      user: null
    };

    base.fetch(`/users/${uid}`, { 
        context: this, asArray: false,
    }).then(data => {
      this.state.user = data
    }).catch(err => {
      this.context.router.push('/login')
    })

    console.log(`This is the user ${ this.state.user }`)
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    base.bindToState(`/chats/${ this.props.params.room }`, {
      context: this,
      state: 'messages',
      asArray: true
    });
  }

  render() {

    const { user } = this.state

    return (
        <div>
            <Grid fluid>
                <Container room={ this.props.params.room } />
                <NewChat room={ this.props.params.room } user={ user } chats={ this.state.messages } />
            </Grid>
        </div>
    );
  }
}

export default ChatPage;