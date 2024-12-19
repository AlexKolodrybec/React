import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const OrderForm = () => {
  return (
    <div className="container">
      <h1>Ready to order? Let's go!</h1>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <Input id="firstName" value="" readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <Input id="phone" type="tel" required />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <Input id="address" required />
        </div>

        <div className="checkbox-group">
          <div className="checkbox-wrapper">
            <input type="checkbox" id="priority" />
            <label htmlFor="priority">Want to give your order priority?</label>
          </div>
        </div>

        <Button type="submit" className="order-btn">
          Order now for €12.00
        </Button>
      </form>
    </div>
  );
};

export default OrderForm;
