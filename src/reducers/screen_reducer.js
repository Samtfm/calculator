import { SET_SCREEN, PUSH_DIGIT } from '../actions/screen_actions';

const ScreenReducer = (state = "0", action) => {
  switch (action.type) {
    case SET_SCREEN:
      return `${action.value}`;
    case PUSH_DIGIT:
      if (state === "0" && action.value !== '.'){
        return `${action.value}`;
      } else {
        return state + `${action.value}`;
      }
    default:
      return state;
  }
};
export default ScreenReducer;
