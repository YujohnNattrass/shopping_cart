import {useState} from 'react'
const AddProductForm = ({onSubmit}) => {
  const [addFormVisible, setAddFormVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const handleAddFormClick = () => {
    setAddFormVisible(!addFormVisible)
  }
  const handleSubmitNewProduct = () => {
    const newProduct = {
      title,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    }
    onSubmit(newProduct, () => {
      setTitle("")
      setPrice("")
      setQuantity("")
    })
  }


  return (
    <div className={addFormVisible ? "add-form visible" : "add-form"}>
    <p><a className="button add-product-button" onClick={handleAddFormClick}>Add A Product</a></p>
    <h3>Add Product</h3>
    <form>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>

      <div className="actions form-actions">
        <a className="button" onClick={handleSubmitNewProduct}>Add</a>
        <a className="button" onClick={handleAddFormClick}>Cancel</a>
      </div>
    </form>
  </div>
  )
}

export default AddProductForm
