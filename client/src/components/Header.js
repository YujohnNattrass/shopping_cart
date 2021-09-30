import Cart from "./Cart";

const Header = ({ cart }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart cart={cart} />
    </header>
  );
};

export default Header;
