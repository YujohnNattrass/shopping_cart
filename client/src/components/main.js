import ProductList from "./productlist"
import ToggleableProductForm from "./toggleableProductForm"

const Main = ({products, setProducts}) => {
  return (
    <main>
      <ProductList products={products} setProducts={setProducts}/>
      <ToggleableProductForm products={products} setProducts={setProducts}/>
    </main>
  )
}

export default Main