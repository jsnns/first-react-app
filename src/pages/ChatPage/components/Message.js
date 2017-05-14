import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import { Col, Row, Grid } from 'react-flexbox-grid';
import Chip from 'material-ui/Chip';

class Message extends Component {
  render() {
    return (
      <div>
        <span className='message-author'>{this.props.newAuthor ? this.props.thread.author.email : null}</span>
        <Chip style={{margin: '4px 0px'}}>
          {this.props.thread.message}
        </Chip>
      </div>
    );
  }
}

export default Message;