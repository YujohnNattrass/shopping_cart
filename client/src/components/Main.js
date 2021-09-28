import ProductList from "./ProductList"
import AddProductForm from "./AddProductForm"

const Main = ({products, onSubmit, onDelete}) => {
  return (
    <main>
      <ProductList products={products} onDelete={onDelete}/>
      <AddProductForm onSubmit={onSubmit} />
    </main>
  )
}

export default Main
