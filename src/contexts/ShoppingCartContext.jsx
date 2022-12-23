import { createContext, useReducer } from "react";
import {
  shoppingCartInitialState,
  shoppingCartReducer
} from "../reducers/shoppingCartReducer";

export const ShoppingCartContext = createContext(null);
export const ShoppingCartDispatchContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    shoppingCartReducer,
    shoppingCartInitialState
  );

  return (
    <ShoppingCartContext.Provider value={state}>
      <ShoppingCartDispatchContext.Provider value={dispatch}>
        {children}
      </ShoppingCartDispatchContext.Provider>
    </ShoppingCartContext.Provider>
  );
};
