import { useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../lib/actions/products";
import axios from "axios";

const EditProductForm = ({ product, onCancel }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();

  const onUpdate = async () => {
    const newInfo = { title, price, quantity };
    const id = product._id;
    try {
      const res = await axios.put(`/api/products/${id}`, newInfo);
      dispatch(editProduct(id, res.data));
    } catch (e) {
      console.error(e);
    }
    onCancel();
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="text"
            id="product-price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={onUpdate}>
            Update
          </a>
          <a className="button" onClick={onCancel}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
