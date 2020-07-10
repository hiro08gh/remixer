import { INCREMENT, DECREMENT } from './actionTypes';

export const incrementHandler = (state: any, action: any) => {
  state = state || 0; // always initialize state if empty

  if (action.type === INCREMENT) {
    return state + 1;
  }

  return state;
};

export const decremenHandler = (state: any, action: any) => {
  state = state || 0; // always initialize state if empty

  if (action.type === DECREMENT) {
    return state - 1;
  }

  return state;
};
