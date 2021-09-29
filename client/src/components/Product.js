import EditProductForm from "./EditProductForm";
import { useState } from "react";

const Product = ({ onAddToCart, onEditProduct, product, onDelete }) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const handleDelete = () => {
    onDelete(product._id);
  };

  const toggleEditForm = () => {
    setEditFormOpen(!editFormOpen);
  };

  const showButton = () => {
    return product.quantity > 0
      ? "button add-to-cart"
      : "button add-to-cart disabled";
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="quantity">{product.quantity} left in stock</p>
        {!editFormOpen ? (
          <div className="actions product-actions">
            <a
              className={showButton()}
              onClick={() => {
                onAddToCart(product);
              }}
            >
              Add to Cart
            </a>
            <a className="button edit" onClick={toggleEditForm}>
              Edit
            </a>
          </div>
        ) : null}
        {editFormOpen ? (
          <EditProductForm
            onEditProduct={onEditProduct}
            product={product}
            onCancel={toggleEditForm}
          />
        ) : (
          <a className="delete-button" onClick={handleDelete}>
            <span>X</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Product;
