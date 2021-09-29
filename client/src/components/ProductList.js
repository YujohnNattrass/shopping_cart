import Product from "./Product";
const ProductList = ({ onAddToCart, onEditProduct, products, onDelete }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            onAddToCart={onAddToCart}
            onEditProduct={onEditProduct}
            products={products}
            key={product._id}
            product={product}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
