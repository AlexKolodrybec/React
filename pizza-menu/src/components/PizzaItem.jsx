import { useState } from 'react';
import CartControl from './CartControl';

const PizzaItem = ({ pizza }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="pizza-item">
      <img
        src={pizza.imageUrl}
        alt={`${pizza.name} Pizza`}
        className="pizza-image"
      />
      <div className="pizza-info">
        <h2>{pizza.name}</h2>
        <p className="ingredients">{pizza.ingredients.join(', ')}</p>
        {pizza.soldOut ? (
          <p className="sold-out">SOLD OUT</p>
        ) : (
          <p className="price">€{pizza.unitPrice.toFixed(2)}</p>
        )}
      </div>
      <CartControl
        isSoldOut={pizza.soldOut}
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

export default PizzaItem;
