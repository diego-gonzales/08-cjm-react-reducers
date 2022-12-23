import { useReducer } from "react";
import { ACTION_TYPES } from "../actions/shoppingCartActions";
import CartItem from "../components/CartItem";
import Product from "../components/Product";
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

  const { products, cart } = state;

  const addToCart = (item) => {
    dispatch({
      type: ACTION_TYPES.ADD_TO_CART,
      item: item
    });
  };

  const removeFromCart = (item, all = false) => {
    if (all) {
      dispatch({
        type: ACTION_TYPES.REMOVE_ALL_FROM_CART,
        item: item
      });
    } else {
      dispatch({
        type: ACTION_TYPES.REMOVE_ONE_FROM_CART,
        item: item
      });
    }
  };

  const clearCart = () => {
    dispatch({
      type: ACTION_TYPES.CLEAR_CART
    });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      <h3 className="mx-1">Products</h3>
      <article className="box grid-container">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </article>

      <h3 className="mx-1">Cart</h3>
      <div>
        <button type="button" onClick={clearCart} disabled={cart.length <= 0}>
          Clear cart
        </button>
      </div>
      <article className="box mx-1">
        {cart.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
          />
        ))}

        {cart.length <= 0 && <p>Cart empty</p>}
      </article>
    </div>
  );
};

export default ShoppingCart;
