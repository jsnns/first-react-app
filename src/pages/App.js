import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Col, Row, Grid } from 'react-flexbox-grid';
import hyMuiTheme from './../shared/HYMuiTheme';
import { Router, Route, browserHistory, Redirect } from 'react-router'
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import base from '../shared/Base'

import ChatPage from './ChatPage';
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';
import MasterPage from './MasterPage';
import SelectChatRoomPage from './ChatPage/Select'
import Header from './MasterPage/Header';

import PrivateRoute from '../shared/router/PrivateRoute'

injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  render() {

    const { user } = this.state

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(hyMuiTheme)}>
        <Router key={Math.random()} history={browserHistory}>
            
          <Route component={Header}>
              <Route path='/login' component={LoginPage} />
            <Route path='/' component={MasterPage}>
              <Route path='/chat' component={SelectChatRoomPage} />
              <Route path='/chat/:room' component={ChatPage} />
              <Route path='/logout' component={LogoutPage} />
            </Route>
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App