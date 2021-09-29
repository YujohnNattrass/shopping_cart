import Cart from "./Cart";

const Header = ({ cart, handleCheckout }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart cart={cart} handleCheckout={handleCheckout} />
    </header>
  );
};

export default Header;
