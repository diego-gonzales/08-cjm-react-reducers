import { useReducer } from "react";
import {
  shoppingCartInit,
  shoppingCartInitialState,
  shoppingCartReducer
} from "../reducers/shoppingCartReducer";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(
    shoppingCartReducer,
    shoppingCartInitialState,
    shoppingCartInit
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      
    </div>
  );
};

export default ShoppingCart;
