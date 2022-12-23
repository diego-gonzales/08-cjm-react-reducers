import { useContext } from "react";
import { ACTION_TYPES } from "../actions/shoppingCartActions";
import { ShoppingCartDispatchContext } from "../contexts/ShoppingCartContext";

const CartItem = ({ item }) => {
  const { id, name, price, quantity } = item;
  const dispatch = useContext(ShoppingCartDispatchContext);

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

  return (
    <div className="item-container">
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <p>Quantity: {quantity}</p>
      <p>Total: ${price * quantity}.00</p>
      <div>
        <button
          type="button"
          onClick={() => removeFromCart(item, false)}
          disabled={quantity <= 1}
        >
          -
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: ACTION_TYPES.ADD_TO_CART,
              item: item
            })
          }
        >
          +
        </button>
      </div>
      <div>
        <button type="button" onClick={() => removeFromCart(item, true)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
