import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/order">Order</Link>
    </nav>
  </header>
);

export default Header;
