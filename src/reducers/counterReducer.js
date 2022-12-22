import { ACTION_TYPES } from "../actions/counterActions";

export const counterInitialState = { counter: 0 };

export function counterReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { counter: state.counter + 1 };
    case ACTION_TYPES.DECREMENT:
      return { counter: state.counter - 1 };
    case ACTION_TYPES.INCREMENT_5:
      return { counter: state.counter + action.payload }
    case ACTION_TYPES.DECREMENT_5:
      return { counter: state.counter - action.payload }
    case ACTION_TYPES.RESET:
      return counterInitialState;
    default:
      return state;
  }
}

// INIT parameter helps us to change the value of theinitialState parameter before initializing it.
export function counterInit(theInitialState) {
  return { counter: theInitialState.counter + 100 }
}