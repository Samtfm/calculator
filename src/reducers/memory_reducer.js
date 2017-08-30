import { UPDATE_MEMORY } from '../actions/memory_actions';

const MemoryReducer = (state = 0, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_MEMORY:
      return action.value;
    default:
      return state;
  }
};
export default MemoryReducer;
