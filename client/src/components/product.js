const Product = ({product}) => {
  return (
    <div class="product">
    <div class="product-details">
      <h3>{product.title}</h3>
      <p class="price">${product.price}</p>
      <p class="quantity">{product.quantity} left in stock</p>
      <div class="actions product-actions">
        <a class="button add-to-cart">Add to Cart</a>
        <a class="button edit">Edit</a>
      </div>
      <a class="delete-button"><span>X</span></a>
    </div>
  </div>
  )
}

export default Product