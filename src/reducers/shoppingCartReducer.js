import { ACTION_TYPES } from "../actions/shoppingCartActions";

export const shoppingCartInitialState = {
  products: [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 }
  ],
  cart: []
};

export function shoppingCartReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_TO_CART:
      console.log("add to cart");
      break;
    case ACTION_TYPES.REMOVE_ONE_FROM_CART:
      console.log("remove one from cart");
      break;
    case ACTION_TYPES.REMOVE_ALL_FROM_CART:
      console.log("remove all from cart");
      break;
    case ACTION_TYPES.CLEAR_CART:
      console.log("clear cart");
      break;
    default:
      return state;
  }
}

export function shoppingCartInit(theInitialState) {
  return theInitialState;
}
