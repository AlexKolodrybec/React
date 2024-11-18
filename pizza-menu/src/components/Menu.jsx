import pizzas from '../data/data';
import PizzaItem from './PizzaItem';

const Menu = () => {
  return (
    <div className="menu-container">
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </div>
  );
}

export default Menu;