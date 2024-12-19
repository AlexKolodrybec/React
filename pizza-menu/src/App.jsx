import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import OrderForm from "./pages/OrderForm";
import OrderStatus from "./pages/OrderStatus";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders/new" element={<OrderForm />} />
        <Route path="/orders/:id" element={<OrderStatus />} />
      </Routes>
    </Router>
  );
};

export default App;