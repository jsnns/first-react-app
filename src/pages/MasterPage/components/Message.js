import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import { Col, Row, Grid } from 'react-flexbox-grid';
import Chip from 'material-ui/Chip';

class Message extends Component {
  render() {
    return (
      <Chip style={{margin: '4px 0px'}}>
        {this.props.thread.message}  
      </Chip>
    );
  }
}

export default Message;