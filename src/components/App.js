import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import ScreenContainer from './screen/screen_container';
import KeypadContainer from './keypad/keypad_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScreenContainer/>
        <KeypadContainer/>
      </div>
    );
  }
}

export default App;
