import { SET_SCREEN, PUSH_DIGIT } from '../actions/screen_actions';

const ScreenReducer = (state = "0", action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_SCREEN:
      return `${action.value}`;
    case PUSH_DIGIT:
      return state + `${action.value}`;
    default:
      return state;
  }
};
export default ScreenReducer;
