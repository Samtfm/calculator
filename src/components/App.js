import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Screen from './screen/screen';
import Numpad from './keypad/keypad';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Screen/>
        <Numpad/>
      </div>
    );
  }
}

export default App;
