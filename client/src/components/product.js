const Product = ({product}) => {
  return (
    <div className="product">
    <div className="product-details">
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="quantity">{product.quantity} left in stock</p>
      <div className="actions product-actions">
        <a className="button add-to-cart">Add to Cart</a>
        <a className="button edit">Edit</a>
      </div>
      <a className="delete-button"><span>X</span></a>
    </div>
  </div>
  )
}

export default Product