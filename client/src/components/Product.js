import EditProductForm from "./EditProductForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../lib/actions/products";
import { addToCart } from "../lib/actions/cart";

const Product = ({ product }) => {
  const [editFormOpen, setEditFormOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    if (product.quantity <= 0) return;

    const item = {
      productId: product._id,
      title: product.title,
      price: product.price,
    };

    dispatch(addToCart(item));
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
            <a className={showButton()} onClick={handleAddToCart}>
              Add to Cart
            </a>
            <a className="button edit" onClick={toggleEditForm}>
              Edit
            </a>
          </div>
        ) : null}
        {editFormOpen ? (
          <EditProductForm product={product} onCancel={toggleEditForm} />
        ) : (
          <a className="delete-button" onClick={() => {dispatch(deleteProduct(product._id))}} >
            <span>X</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Product;
