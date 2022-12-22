import { useReducer } from "react";
import { ACTION_TYPES } from "../actions/counterActions";
import { counterInit, counterInitialState, counterReducer } from "../reducers/counterReducer";

const CounterImproved = () => {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState, counterInit);

  const add = () => dispatch({ type: ACTION_TYPES.INCREMENT });
  const substract = () => dispatch({ type: ACTION_TYPES.DECREMENT });
  const add5 = () => dispatch({ type: ACTION_TYPES.INCREMENT_5, payload: 5 });
  const substract5 = () => dispatch({ type: ACTION_TYPES.DECREMENT_5, payload: 5 });
  const reset = () => dispatch({ type: ACTION_TYPES.RESET });

  return (
    <>
      <h2>Counter Improved</h2>
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
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
      {/* <p>{counter}</p> */}
      <p>{state.counter}</p>
    </>
  );
};

export default CounterImproved;
