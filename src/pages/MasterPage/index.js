import { Component, PropTypes } from 'react';
import base from '../../shared/Base'

class MasterPage extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  static contextTypes = {
      router: PropTypes.object.isRequired
  };

  state = {
    gotUserData: false,
  }

  componentWillMount() {
    const uid = window.localStorage.getItem('USER')
    this.state = {
      messages: [],
      user: null
    };
    base.fetch(`/users/${uid}`, { 
        context: this, asArray: false,
        then(data) {
            this.state.user = data
            this.gotData()
        }
    })
        
  }

  gotData = () => this.setState({ gotUserData: true });

  render() {
    return this.state.gotUserData ? this.props.children : null;
  }
}

export default MasterPage;
