import Product from "./Product";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((store) => store.products);

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return <Product key={product._id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
