import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li type="checkbox" checked={ this.props.description} />
        <span>{ this.props.description }</span>
      </li>
    );
  }
}

export default ToDo;
