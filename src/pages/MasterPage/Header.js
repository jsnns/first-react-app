import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import { Row, Col } from 'react-flexbox-grid/lib/index';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import base from '../../shared/Base'

export default class extends Component {
  static propTypes = {
    children: PropTypes.node,
    user: PropTypes.object
  };

  static contextTypes = {
      router: PropTypes.object.isRequired
  };

  static defaultProps = {
    children: null
  };

  constructor(props) {
      super(props);
      this.state = {
          user: null
      }
  }

  _goTo(route) {
      this.context.router.push(route)
  }

  componentWillMount() {
    const storageKey = "USER";
    base.onAuth(user => {
      if (user) {
        window.localStorage.setItem(storageKey, user.uid);
        base.post(`/users/${user.uid}`, {
            data: {
                email: user.email,
                uid: user.uid
            }
        })
            .then(() => {
                this.context.router.push('/chat')
            })
            .catch(err => {
                console.log(err)
            })
        this.setState({gotUserData: true, user: user});
      } else {
        this.setState({gotUserData: false});
        window.localStorage.removeItem(storageKey);
        this.context.router.push('/login')
      }
    });
  }

  render() {

    const { user } = this.state;

    return (
        <div>
            <AppBar
                title='Chat Place'
                onTitleTouchTap={this._goTo.bind(this, '/chat')}
                iconElementLeft={<p></p>}
                iconElementRight={user ?
                    <FlatButton onTouchTap={this._goTo.bind(this, '/logout')} label={'Logout ' + user.email || user.uid} /> : 
                    <FlatButton onTouchTap={this._goTo.bind(this, '/login')} label='Login' />
                } />
            {this.props.children}
        </div>
    );
  }
}
