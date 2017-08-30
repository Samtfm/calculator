import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Screen from './screen/screen';
import KeypadContainer from './keypad/keypad_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen/>
        <KeypadContainer/>
      </div>
    );
  }
}

export default App;
