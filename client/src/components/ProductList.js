import EditProductForm from "./EditProductForm"
import Product from "./Product"
const ProductList = ({products, onDelete}) => {

  return (
    <div className="product-listing">
    <h2>Products</h2>
    {products.map(product => {
      return <Product key={product._id} product={product} onDelete={onDelete} />
    })}
  </div>
  )
}

export default ProductList
