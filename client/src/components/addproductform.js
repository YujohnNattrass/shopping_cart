import { useState } from "react"
import axios from "axios"

const AddProductForm = ({handleClick, products, setProducts}) => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const handleSubmit = async () => {
        const item = {title, price, quantity}
        console.log(item)
        const newProd = await axios.post("http://localhost:5000/api/products", item)
        setProducts(products.concat(newProd.data))
        resetForm()
    }

    const resetForm = () => {
        setTitle("")
        setPrice(0)
        setQuantity(0)
    }

    return (
        <>
            <h3>Add Product</h3>
                <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="product-name">Product Name</label>
                    <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="input-group">
                    <label htmlFor="product-price">Price</label>
                    <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>

                <div className="input-group">
                    <label htmlFor="product-quantity">Quantity</label>
                    <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>

                <div className="actions form-actions">
                    <a className="button" onClick={handleSubmit}>Add</a>
                    <a className="button" onClick={handleClick}>Cancel</a>
                </div>
                </form>
        </>
    )
}

export default AddProductForm