const Product = ({ product, addToCart }) => {
  const { id, name, price } = product;

  return (
    <div className="product-card">
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button type="button" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
