import CartItem from "./CartItem";

const Cart = ({ cart, handleCheckout }) => {
  const cartIsEmpty = () => {
    return cart.length === 0;
  };

  const checkoutButtonStatus = () => {
    return !cartIsEmpty() ? "button checkout" : "button checkout disabled";
  };

  const totalPrice = () => {
    const total = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    return `$${total.toFixed(2)}`;
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cartIsEmpty() ? (
        <>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
        </>
      ) : (
        <table className="cart-items">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>

            {cart.map((item) => {
              return <CartItem key={item._id} item={item} />;
            })}

            <tr>
              <td colSpan="3" className="total">
                Total: {totalPrice()}
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <a className={checkoutButtonStatus()} onClick={handleCheckout}>
        Checkout
      </a>
    </div>
  );
};

export default Cart;
