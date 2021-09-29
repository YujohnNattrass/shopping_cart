import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const Main = ({
  onAddToCart,
  onEditProduct,
  setProducts,
  products,
  onSubmit,
  onDelete,
}) => {
  return (
    <main>
      <ProductList
        onAddToCart={onAddToCart}
        onEditProduct={onEditProduct}
        setProducts={setProducts}
        products={products}
        onDelete={onDelete}
      />
      <AddProductForm onSubmit={onSubmit} />
    </main>
  );
};

export default Main;
