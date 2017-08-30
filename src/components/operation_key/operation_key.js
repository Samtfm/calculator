import React, { Component } from 'react';

class OperationKey extends Component {
  press(){
    this.props.setOperation({
      func: this.props.operation,
      name: this.props.name
    });
  }
  render(){
    return (
      <div>
        <button onClick={this.press.bind(this)}>
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default OperationKey;
