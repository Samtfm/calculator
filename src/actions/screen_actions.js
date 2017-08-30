export const SET_SCREEN = "SET_SCREEN";

export const setScreen = (value) => ({
  type: SET_SCREEN,
  value
});

export const PUSH_DIGIT = "PUSH_DIGIT";

export const pushDigit = (value) => ({
  type: PUSH_DIGIT,
  value
});

export const SET_OPERATION = "SET_OPERATION";

export const setOperation = (operation) => ({
  type: SET_OPERATION,
  func: operation.func,
  name: operation.name
});
