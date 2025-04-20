import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = () => {
    navigate('/order', { state: { cartItems: cart } }); // Pass cart items to OrderForm
  };

  return (
    <div className="card-grid">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="card" key={index}>
              {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
          <div className="summary-card">
            <h3>Total: ₹{total.toFixed(2)}</h3>
            <button className="order-btn" onClick={handleOrder}>Order Now</button>
          </div>
        </>
      )}
    </div>
  );
}
