import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Col, Row, Grid } from 'react-flexbox-grid';
import hyMuiTheme from './../shared/HYMuiTheme';
import { BrowserRouter as Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router-dom'
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import base from '../shared/Base'

import ChatPage from './ChatPage';
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';

import PrivateRoute from '../shared/router/PrivateRoute'

injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  componentWillMount() {

    const storageKey = "STORE_KEY";
    base.onAuth(user => {
      if (user) {
        window.localStorage.setItem(storageKey, user.uid);
        this.setState({user: user});
        this.context.router.history.push('/')
      } else {
        window.localStorage.removeItem(storageKey);
        this.setState({user: null});
        this.context.router.history.push('/login')
      }
    });
  }

  render() {

    const { user } = this.state

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(hyMuiTheme)}>
        <div>
          <AppBar
            title='Chat Place'
            onTitleTouchTap={this.context.router.history.push('/')}
            iconElementLeft={<p></p>}
            iconElementRight={user ?
                <FlatButton onTouchTap={this.context.router.history.push('/logout')} label={user.email || user.uid} /> : 
                <FlatButton onTouchTap={this.context.router.history.push('/login')} label='Login' />
            } />
            <Route path='/login' component={LoginPage} />
            <Route exact path='/' component={ChatPage} />
            <Route path='/logout' component={LogoutPage} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App