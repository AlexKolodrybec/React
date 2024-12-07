import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/menu">
          Меню
        </Link>
        <Link to="/cart">
          Кошик
        </Link>
      </nav>
    </header>
  );
};

export default Header;