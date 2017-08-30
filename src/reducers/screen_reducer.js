import { SET_SCREEN, BUILD_SCREEN } from '../actions/screen_actions';

const ScreenReducer = (state = "0", action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_SCREEN:
      return `${action.value}`;
    default:
      return state + `${action.value}`;
  }
};
export default ScreenReducer;
