const Cart = () => {
  return (
    <div class="cart">
    <h2>Your Cart</h2>
    <p>Your cart is empty</p>
    <p>Total: $0</p>
    <a class="button checkout disabled">Checkout</a>
  </div>
  )
}

export default Cart

//  with no items:
/* 
      <div class="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <a class="button checkout disabled">Checkout</a>
      </div>
*/

/*

      <div class="cart">
        <h2>Your Cart</h2>
        <table class="cart-items">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr>
            <td>Amazon Kindle E-reader</td>
            <td>2</td>
            <td>$79.99</td>
          </tr>
          <tr>
            <td>Apple 10.5-Inch iPad Pro</td>
            <td>1</td>
            <td>$649.99</td>
          </tr>

          <tr>
            <td colspan="3" class="total">Total: $729.98</td>
          </tr>
        </table>
        <a class="button checkout">Checkout</a>
      </div>

*/