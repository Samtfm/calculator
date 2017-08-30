import { combineReducers } from 'redux';
//import currentValueReducer from './currentValueReducer';
import memoryReducer from './memory_reducer';
import screenReducer from './screen_reducer';
const RootReducer = combineReducers({
//  currentValue: currentValueReducer,
  memory: memoryReducer,
  screenDisplay: screenReducer
});

export default RootReducer;
