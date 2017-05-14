import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Container from './MasterPage/components/Container';
import NewChat from './MasterPage/components/NewChat'
import { Col, Row, Grid } from 'react-flexbox-grid';
import hyMuiTheme from './../shared/HYMuiTheme';
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import base from '../shared/Base'

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
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
      <MuiThemeProvider muiTheme={ getMuiTheme(hyMuiTheme) }>
        <div>
          <AppBar title='Hedge You' />
          <Grid fluid>
            <Container />
            <NewChat chats={ this.state.messages } />
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App