// Updated App with Swiggy-style layout and card-based design across Menu, Cart, OrderForm, and History

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import OrderHistory from './components/OrderHistory';
import { CartProvider } from './context/CartContext';
import './App.css';

export default function App() {
  return (
    
    <CartProvider>
      
      <Router>
        <header className="navbar">
          <div className="navbar-content">
            <h1 className="logo">The Digital Diner 🍽️</h1>
            <nav className="nav-links">
              <Link to="/">Menu</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/order">Order</Link>
              <Link to="/history">History</Link>
            </nav>
          </div>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<OrderForm />} />
            <Route path="/history" element={<OrderHistory />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}
