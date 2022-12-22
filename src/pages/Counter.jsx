import {  useReducer } from "react";

const ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT_5: "DECREMENT_5",
  RESET: "RESET"
};

const initialState = { counter: 0 };

function reducer(state, action) {
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
      return initialState;
    default:
      return state;
  }
}

// INIT parameter helps us to change the value of theinitialState parameter before initializing it.
function init(theInitialState) {
  return { counter: theInitialState.counter + 100 }
}

const Counter = () => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState, init);

  // const add = () => setCounter(counter + 1);
  // const substract = () => setCounter(counter - 1);

  const add = () => dispatch({ type: ACTION_TYPES.INCREMENT });
  const substract = () => dispatch({ type: ACTION_TYPES.DECREMENT });
  const add5 = () => dispatch({ type: ACTION_TYPES.INCREMENT_5, payload: 5 });
  const substract5 = () => dispatch({ type: ACTION_TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: ACTION_TYPES.RESET });

  return (
    <>
      <h2>Counter</h2>
      <div>
        <button type="button" onClick={substract}>
          -
        </button>
        <button type="button" onClick={add}>
          +
        </button>
      </div>
      <div>
        <button type="button" onClick={substract5}>
          {" "}
          -5{" "}
        </button>
        <button type="button" onClick={add5}>
          {" "}
          +5{" "}
        </button>
      </div>
      <div>
        <button type="button" onClick={reset}>Reset</button>
      </div>
      {/* <p>{counter}</p> */}
      <p>{state.counter}</p>
    </>
  );
};

export default Counter;
