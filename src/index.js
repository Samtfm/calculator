import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import RootReducer from './reducers/root_reducer';

//wrap app in provider
const Root = ({store}) => (
  <Provider store = {store}>
    <App />
  </Provider>
);

//create store
const store = createStore(RootReducer);
window.store = store; //temporary save to window TODO: Delete

//render root in root element
ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
