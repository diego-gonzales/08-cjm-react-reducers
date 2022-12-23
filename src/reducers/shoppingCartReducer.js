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
      const itemIsAlreadyExists = state.cart.some(
        (item) => item.id === action.item.id
      );

      return itemIsAlreadyExists
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.item.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          }
        : {
            ...state,
            cart: [...state.cart, { ...action.item, quantity: 1 }]
          };

    case ACTION_TYPES.REMOVE_ONE_FROM_CART:
      return action.item.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.item.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          }
        : state;

    case ACTION_TYPES.REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.item.id)
      };

    case ACTION_TYPES.CLEAR_CART:
      return {
        ...state,
        cart: []
      };

    default: {
      throw Error("Unknown action: " + action.type);
      // return state;
    }
  }
}

export function shoppingCartInit(theInitialState) {
  return theInitialState;
}
