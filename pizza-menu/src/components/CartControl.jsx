import Button from './Button';

const CartControl = ({ isSoldOut, count, onIncrement, onDecrement }) => {
  return (
    <div className="cart-controls">
      {isSoldOut ? (
        <span className="sold-out">SOLD OUT</span>
      ) : count === 0 ? (
        <Button
          className="add-to-cart"
          onClick={onIncrement}
          buttonText="Add to Cart"
        />
      ) : (
        <div className="counter">
          <Button
            className="decrement"
            onClick={onDecrement}
            buttonText="-"
          />
          <span>{count}</span>
          <Button
            className="increment"
            onClick={onIncrement}
            buttonText="+"
          />
        </div>
      )}
    </div>
  );
};

export default CartControl;
