import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import { Col, Row, Grid } from 'react-flexbox-grid';
import Chip from 'material-ui/Chip';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';

class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
      link: 'default'
    };
  };

  _updateLink(e) {
    this.setState({link: e.target.value})
  }

  render() {
    return (
      <Row style={{marginTop: '25px'}}>
        <Col xs={4} xsOffset={4}>
            <TextField
              fullWidth
              hintText='Chat Room'
              onChange={this._updateLink.bind(this)}
              />
            <Link to={`/chat/${this.state.link}`}> <RaisedButton secondary fullWidth label={this.state.link} /> </Link>
        </Col>
      </Row>
    );
  }
}

export default Message;