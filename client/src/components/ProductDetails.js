const ProductDetails = ({product, onDelete, editFormVisible, toggleEditForm, onAddCart}) => {
  const handleDelete = () => {
    onDelete(product._id)
  }

  const handleAddCart = () => {
    onAddCart({
      productId: product._id,
      title: product.title,
      price: product.price
    });
  }

  return (
    <div className="product-details">
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <p className="quantity">{product.quantity} left in stock</p>
      { editFormVisible ?
        null :
        <div className="actions product-actions">
          <a className="button add-to-cart" onClick={handleAddCart} >Add to Cart</a>
          <a className="button edit" onClick={toggleEditForm}>Edit</a>
        </div>
      }
      <a className="delete-button" onClick={handleDelete}><span>X</span></a>
    </div>
  )
}

export default ProductDetails;