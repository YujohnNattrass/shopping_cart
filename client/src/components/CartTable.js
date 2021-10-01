const CartTable = ({cart}) => {
  console.log(cart)
  const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0);
  return (
    <table className="cart-items">
      <tr>
        <th>Item</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      {cart.map(item => {

        return (
          <tr>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>${item.price}</td>
          </tr>
        )
      })}
      <tr>
        <td colspan="3" className="total">Total: ${total}</td>
      </tr>
    </table>
  )
}

export default CartTable;