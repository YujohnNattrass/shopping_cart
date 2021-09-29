import EditProductForm from "./editproductform"
import Product from "./product"
const ProductList = ({products, setProducts}) => {

  return (
    <div className="product-listing">
    <h2>Products</h2>
    {products.map(product => {
      return <Product key={product._id} product={product} products={products} setProducts={setProducts} />
    })}
  </div>
  )
}

export default ProductList