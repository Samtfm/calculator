import React, { Component } from 'react';
import NumKey from '../num_key/num_key';
import OperationKeyContainer from '../operation_key/operation_key_container';
import './keypad.css';

class Keypad extends Component {
  render(){
    return (
      <div>
        <div className='key-row'>
          <NumKey val={7} pushDigit={this.props.pushDigit}/>
          <NumKey val={8} pushDigit={this.props.pushDigit}/>
          <NumKey val={9} pushDigit={this.props.pushDigit}/>
          <OperationKeyContainer name='/'
            operation={(a, b) => a / b} />
        </div>
        <div className='key-row'>
          <NumKey val={4} pushDigit={this.props.pushDigit}/>
          <NumKey val={5} pushDigit={this.props.pushDigit}/>
          <NumKey val={6} pushDigit={this.props.pushDigit}/>
          <OperationKeyContainer name='*'
            operation={(a, b) => a * b} />
        </div>
        <div className='key-row'>
          <NumKey val={1} pushDigit={this.props.pushDigit}/>
          <NumKey val={2} pushDigit={this.props.pushDigit}/>
          <NumKey val={3} pushDigit={this.props.pushDigit}/>
          <OperationKeyContainer name='-'
            operation={(a, b) => a - b} />
        </div>
        <div className='key-row'>
          <NumKey val={0} pushDigit={this.props.pushDigit}/>
          <NumKey val={'.'} pushDigit={this.props.pushDigit}/>
          <button>=</button>
          <OperationKeyContainer name='+'
            operation={(a, b) => a + b} />
        </div>
      </div>
    );
  }
}

export default Keypad;
