import ProductList from "./productlist"
import AddProductForm from "./addproductform"

const Main = ({products}) => {
  return (
    <main>
      <ProductList products={products} />
      <AddProductForm />
    </main>
  )
}

export default Main