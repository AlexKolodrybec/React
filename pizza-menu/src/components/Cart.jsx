import { useState } from "react";
import { cartItems } from "../data/data2"; 
import Button from "./Button";

const Cart = () => {
  const [items, setItems] = useState(cartItems);

  const handleDecrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 } : item)
    );
  };

  const handleIncrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setItems([]);
  };

  return (
    <div className="container">
      <a href="#" className="back-link">
        ← Back to menu
      </a>
      <h1 className="cart-title">Your cart</h1>
      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <span className="quantity-text">{item.quantity}×</span>
            <span>{item.name}</span>
            <span className="price">€{(item.price * item.quantity).toFixed(2)}</span>
            <div className="quantity-controls">
              <Button
                className="quantity-btn"
                onClick={() => handleDecrement(item.id)}
                buttonText="-"
              />
              <span>{item.quantity}</span>
              <Button
                className="quantity-btn"
                onClick={() => handleIncrement(item.id)}
                buttonText="+"
              />
              <Button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
                buttonText="DELETE"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="cart-actions">
        <Button className="order-btn" buttonText="Order pizzas" />
        <Button
          className="clear-btn"
          onClick={handleClearCart}
          buttonText="Clear cart"
        />
      </div>
    </div>
  );
};

export default Cart;
