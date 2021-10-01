import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkout } from "../lib/actions/cart";
import axios from "axios";

const Cart = () => {
  const [total, setTotal] = useState("");
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    const totalPrice = () => {
      const tot = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      setTotal(`$${tot.toFixed(2)}`);
    };
    totalPrice();
  }, [cart]);

  const dispatch = useDispatch();

  const cartIsEmpty = () => {
    return cart.length === 0;
  };

  const checkoutButtonStatus = () => {
    return !cartIsEmpty() ? "button checkout" : "button checkout disabled";
  };

  const handleCheckout = async () => {
    dispatch(checkout());
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
                Total: {total}
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
