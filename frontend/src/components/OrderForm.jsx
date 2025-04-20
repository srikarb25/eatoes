import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import API from '../api';
import './OrderForm.css';

export default function OrderForm() {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] };
  const { clearCart } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post('/orders', {
        name,
        phone,
        items: cartItems,
        totalPrice: cartItems.reduce((sum, item) => sum + item.price, 0),
      });
      clearCart();
      setSuccess('✅ Order placed successfully!');
    } catch (err) {
      alert('❌ Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Place Order</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <p>{item.name} - ₹{item.price}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Order'}
        </button>
      </form>
    
      {success && <p>{success}</p>}
    </div>
  );
}
