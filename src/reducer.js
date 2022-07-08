import { INCREMENT, DECREMENT, SET } from './action';

export const reducer = (state, action) => {
  if (action.type === INCREMENT) {
    return { ...state, value: state.value + 1 };
  }
  if (action.type === DECREMENT) {
    return { ...state, value: state.value - 1 };
  }
  if (action.type === SET) {
    return { ...state, value: parseInt(action.payload, 10) };
  }
  if (action.type === 1) {
    console.log('action', action, 'state', state);
    return { ...state, anotherValue: action.payload };
  }

  return state;
};
