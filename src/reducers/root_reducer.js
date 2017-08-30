import { combineReducers } from 'redux';
//import currentValueReducer from './currentValueReducer';
import memoryReducer from './memory_reducer';
const RootReducer = combineReducers({
//  currentValue: currentValueReducer,
  memory: memoryReducer
});

export default RootReducer;
