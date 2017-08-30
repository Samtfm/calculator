import React, { Component } from 'react';
//import './button.css';

class NumKey extends Component {
  render(){
    return (
      <div>
        <button>
          {this.props.val}
        </button>
      </div>
    );
  }
}

export default NumKey;
