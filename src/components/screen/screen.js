import React, { Component } from 'react';
import './screen.css';

class Screen extends Component {
  render(){
    return (
      <div className='display'>
        <span className='number'>
          {this.props.number}

        </span>
        <span className='operation-name'>
          {this.props.operationName}
        </span>
      </div>
    );
  }
}

export default Screen;
