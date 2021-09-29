import { useState } from "react"
import AddProductForm from "./addProductForm"
import AddProductButton from "./addProductButton"

const ToggleableProductForm = ({products, setProducts}) => {
  const [openForm, setOpenForm] = useState(false)

  const toggleForm = () => {
    setOpenForm(!openForm)
  }
  const formClass = openForm ? "add-form visible" : "add-form"
  return (
    <div class={formClass}>
        <p><a class="button add-product-button" onClick={toggleForm}>Add A Product</a></p>
        <AddProductForm products={products} setProducts={setProducts} handleClick={toggleForm}/>
    </div>
  )
}

export default ToggleableProductForm