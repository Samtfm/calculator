import { SET_SCREEN, PUSH_DIGIT, SET_OPERATION, EVALUATE } from '../actions/screen_actions';
import merge from 'lodash/merge';

const applyOperation = (prevNum, newNum, func) => {
  const a = Number(prevNum);
  const b = Number(newNum);
  if (func) {
    return `${func(a,b)}`;
  } else {
    return newNum;
  }
};
const ScreenReducer = (state = {number: "0", typing: true}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case SET_SCREEN:
      newState.number = `${action.value}`;
      return newState;
    case PUSH_DIGIT:
      if (!state.typing) {
        newState.number = "0";
        newState.typing = true;
      }
      if (action.value === '.') {
        newState.number = newState.number.includes('.') ?
          newState.number :
          newState.number + `${action.value}`;
        return newState;
      } else {
        newState.number = newState.number === "0" ?
          `${action.value}` :
          newState.number + `${action.value}`;
        return newState;
      }
    case SET_OPERATION:
      newState.typing = false;
      newState.operationFunc = action.func;
      newState.operationName = action.name;
      newState.prevNum = state.number;
      return newState;
    case EVALUATE:
      newState.typing = false;
      console.log(newState)
      newState.number = applyOperation(newState.prevNum, newState.number, newState.operationFunc);
      return newState;
    default:
      return state;
  }
};
export default ScreenReducer;
