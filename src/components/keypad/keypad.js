import React, { Component } from 'react';
import NumKey from '../num_key/num_key';
import './keypad.css';

class Keypad extends Component {
  render(){
    return (
      <div>
        <div className='key-row'>
          <NumKey val={7}/>
          <NumKey val={8}/>
          <NumKey val={9}/>
        </div>
        <div className='key-row'>
          <NumKey val={4}/>
          <NumKey val={5}/>
          <NumKey val={6}/>
        </div>
        <div className='key-row'>
          <NumKey val={1}/>
          <NumKey val={2}/>
          <NumKey val={3}/>
        </div>
        <NumKey val={0}/>
      </div>
    );
  }
}

export default Keypad;
