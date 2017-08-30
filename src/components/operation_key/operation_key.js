import React, { Component } from 'react';

class OperationKey extends Component {
  press(){
    if (this.props.typing) {
      this.props.evaluate();
    }
    if (this.props.operation) {
      this.props.setOperation({
        func: this.props.operation,
        name: this.props.name
      });
    } else {
      this.props.setOperation({});
    }
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
