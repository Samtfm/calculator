export const SET_NEXT_OPERATION = "SET_NEXT_OPERATION";

export const setNextOperation = (operation) => ({
  type: SET_NEXT_OPERATION,
  operation
});

export const PUSH_DIGIT = "PUSH_DIGIT";

export const pushDigit = (value) => ({
  type: PUSH_DIGIT,
  value
});
