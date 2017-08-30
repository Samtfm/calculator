import { SET_SCREEN, PUSH_DIGIT } from '../actions/screen_actions';

const ScreenReducer = (state = "0", action) => {
  switch (action.type) {
    case SET_SCREEN:
      return `${action.value}`;
    case PUSH_DIGIT:
      if (action.value === '.') {
        return state.includes('.') ? state : state + `${action.value}`;
      } else {
        return state === "0" ? `${action.value}` : state + `${action.value}`;
      }
    default:
      return state;
  }
};
export default ScreenReducer;
