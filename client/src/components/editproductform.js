import Product from "./product"

const EditProductForm = ({product}) => {
  return (
    <div class="edit-form">
            <h3>Edit Product</h3>
            <form>
              <div class="input-group">
                <label for="product-name">Product Name</label>
                <input type="text" id="product-name" value={product.title} />
              </div>

              <div class="input-group">
                <label for="product-price">Price</label>
                <input type="text" id="product-price" value={product.price} />
              </div>

              <div class="input-group">
                <label for="product-quantity">Quantity</label>
                <input type="text" id="product-quantity" value={product.quantity} />
              </div>

              <div class="actions form-actions">
                <a class="button">Update</a>
                <a class="button">Cancel</a>
              </div>
            </form>
          </div>
  )
}

export default EditProductForm