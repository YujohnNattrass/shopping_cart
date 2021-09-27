import EditProductForm from "./editproductform"
import Product from "./product"
const ProductList = ({products}) => {

  return (
    <div class="product-listing">
    <h2>Products</h2>
    {products.map(product => {
      return <Product key={product.id} product={product} />
    })}
  </div>
  )
}

export default ProductList