import axios from "axios"

const Product = ({product, products, setProducts}) => {
  const id = product._id
  console.log(id)
  const deleteItem = () => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
    let newProducts = products.filter(p => p._id !== id)
    setProducts(newProducts)
  } 

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
      <a className="delete-button" onClick={deleteItem}><span>X</span></a>
    </div>
  </div>
  )
}

export default Product