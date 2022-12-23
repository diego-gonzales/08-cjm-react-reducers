import { useContext } from "react";
import { ACTION_TYPES } from "../actions/shoppingCartActions";
import { ShoppingCartDispatchContext } from "../contexts/ShoppingCartContext";

const Product = ({ product }) => {
  const { id, name, price } = product;
  const dispatch = useContext(ShoppingCartDispatchContext);

  return (
    <div className="product-card">
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: ACTION_TYPES.ADD_TO_CART,
            item: product
          })
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
