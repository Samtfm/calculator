import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import ScreenContainer from './screen/screen_container';
import KeypadContainer from './keypad/keypad_container';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';

class App extends Component {
  render() {
    const store = createStore(RootReducer);
    return (
      <Provider store = {store}>
        <div className="App">
          <ScreenContainer/>
          <KeypadContainer/>
        </div>
      </Provider>
    );
  }
}
export default App;
