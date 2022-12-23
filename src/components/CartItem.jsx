const CartItem = ({ item, removeFromCart, addToCart }) => {
  const { id, name, price, quantity } = item;

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
        <button type="button" onClick={() => addToCart(item)}>
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
