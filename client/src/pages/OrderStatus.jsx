import { useEffect, useState, useContext } from "react";
import API from "../api/axios.js";
import { AuthContext } from "../context/AuthContext.jsx";

export default function OrderStatus() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get(`/orders/user/${user.id}`).then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <div>
      <h2>My Orders</h2>

      {orders.map((o) => (
        <div key={o._id} className="order-card">
          <p><b>Device:</b> {o.device}</p>
          <p><b>Status:</b> {o.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
