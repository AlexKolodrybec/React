import React from "react";
import { useParams } from "react-router-dom";
import "../styles/OrderStatus.css"; 

const OrderStatus = () => {
  const { id } = useParams();

  const order = {
    id: id,
    status: "preparing",
    priority: true,
    estimatedTime: "Dec 12, 01:37 PM",
    timeLeft: "49 minutes",
    items: [
      { name: "Margherita", price: 12, ingredients: "Tomato, Mozzarella, Basil" },
    ],
    priorityCost: 2,
    total: 14,
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="order-title">
          Order #{order.id} status: {order.status}
        </h1>
        <div className="badges">
          {order.priority && <span className="badge badge-priority">PRIORITY</span>}
          <span className="badge badge-preparing">PREPARING ORDER</span>
        </div>
      </div>

      <div className="time-banner">
        <div className="time-left">Only {order.timeLeft} 😃</div>
        <div className="estimated-time">
          (Estimated delivery: {order.estimatedTime})
        </div>
      </div>

      <div className="order-details">
        {order.items.map((item, index) => (
          <div className="pizza-item" key={index}>
            <div className="pizza-header">
              <span className="pizza-name">1× {item.name}</span>
              <span className="pizza-price">€{item.price.toFixed(2)}</span>
            </div>
            <div className="ingredients">{item.ingredients}</div>
          </div>
        ))}
      </div>

      <div className="price-breakdown">
        <div className="price-item">
          <span className="price-label">Price pizza:</span>
          <span className="price-value">€{order.items[0].price.toFixed(2)}</span>
        </div>
        <div className="price-item">
          <span className="price-label">Price priority:</span>
          <span className="price-value">€{order.priorityCost.toFixed(2)}</span>
        </div>
        <div className="price-item">
          <span className="price-label">To pay on delivery:</span>
          <span className="price-value">€{order.total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
