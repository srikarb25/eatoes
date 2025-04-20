import { useEffect, useState } from 'react';
import API from '../api';
import { useCart } from '../context/CartContext';
import './Menu.css';

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    API.get('/menu').then(res => setMenu(res.data));
  }, []);

  return (
    <div className="menu-container">
      <h2>🍽️ Our Menu</h2>
      <div className="menu-grid">
        {menu.map(item => (
          <div key={item._id} className="menu-card">
            {item.imageUrl && <img src={item.imageUrl} alt={item.name} />}
            <h3>{item.name} - ₹{item.price}</h3>
            <p>{item.description}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
