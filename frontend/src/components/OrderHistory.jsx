import { useState } from 'react';
import API from '../api';
import './OrderHistory.css';

export default function OrderHistory() {
  const [phone, setPhone] = useState('');
  const [orders, setOrders] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await API.get(`/orders/history/${phone}`);
     // const latestFive = res.data.slice(0, 5);
      setOrders(res.data);
      console.log("Fetched Orders:", res.data);

    } catch {
      alert('❌ No orders found for this number');
    }
  };

  return (
    <div className="order-history">
      <h2>🕒 Order History</h2>
      <div className="search-bar">
        <input
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {orders.length === 0 ? (
        <p>No orders to show.</p>
      ) : (
        orders.map((order, i) => (
          <div className="order-card" key={i}>
            <h3>Order #{order._id || order.id}</h3>
            <p><strong>Name:</strong> {order.User?.name}</p>
            <p><strong>Phone:</strong> {order.User?.phone}</p>

            <div className="items">
              {order.items.map((item, idx) => (
                <div className="item-card" key={idx}>
                  <img src={item.imageUrl} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="total">Total: ₹{order.totalPrice}</h4>
          </div>
        ))
      )}
    </div>
  );
}
