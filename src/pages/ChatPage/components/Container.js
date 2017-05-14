import React, { Component } from 'react';
import Message from './Message';
import base from '../../../shared/Base'
import '../assets/style.css';
import { Row, Col } from 'react-flexbox-grid';

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      show: null
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`/chats/${this.props.room}`, {
      context: this,
      state: 'messages',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  _removeMessage(index, e) {
    e.stopPropagation();
    var arr = this.state.messages.concat([]);
    arr.splice(index, 1);

    this.setState({
      messages: arr,
      show: null
    });
  }

  _toggleView(index) {

    if (index == this.state.show) {
      this.setState({
        show: null
      })
    } else {
      this.setState({
        show: index
      })
    }
  }

  render() {

    var messages = this.state.messages.map((item, index) => {
        let newAuthor = true;
        if(this.state.messages[index-1] && item.author.email === this.state.messages[index-1].author.email) {
          newAuthor = false
        }

        return (
          <Message
            newAuthor={ newAuthor }
            thread={ item }
            show={ this.state.show === index }
            removeMessage={ this._removeMessage.bind(this, index) }
            handleClick={ this._toggleView.bind(this, index) }
            key={ index } />
        );
    });

    return (
      <Row style={{marginTop: '10px', display: 'inline'}}> { messages } </Row>
    );
  }
}

export default Container;
