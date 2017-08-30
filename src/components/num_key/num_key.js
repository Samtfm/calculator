import React, { Component } from 'react';
//import './button.css';

class NumKey extends Component {
  press(){
    console.log(this.props.val);
  }
  render(){
    return (
      <div>
        <button onClick={this.press.bind(this)}>
          {this.props.val}
        </button>
      </div>
    );
  }
}

export default NumKey;
