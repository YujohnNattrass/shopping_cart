import { useState } from "react";

const EditProductForm = ({ onEditProduct, product, onCancel }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleEditProduct = () => {
    const newInfo = { title, price, quantity };
    onEditProduct(product._id, newInfo);
  };

  const onUpdate = () => {
    handleEditProduct();
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
