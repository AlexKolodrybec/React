import { useState } from 'react';

const CartControl = ({ isSoldOut }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    if (!isSoldOut) {
      setIsInCart(true);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setIsInCart(false);
      setCount(1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="cart-controls">
      {isSoldOut ? (
        <span className="sold-out">SOLD OUT</span>
      ) : !isInCart ? (
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      ) : (
        <div className="counter">
          <button className="decrement" onClick={handleDecrement}>
            -
          </button>
          <span>{count}</span>
          <button className="increment" onClick={handleIncrement}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default CartControl;
