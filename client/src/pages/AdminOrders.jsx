import { useEffect, useState } from "react";
import API from "../api/axios.js";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    API.get("/orders/all").then((res) => setOrders(res.data));
  };

  const updateStatus = async (id, status) => {
    await API.patch(`/orders/update/${id}`, { status });
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>All Orders</h2>

      {orders.map((o) => (
        <div key={o._id} className="order-card">
          <p><b>Patient:</b> {o.patientName}</p>
          <p><b>Device:</b> {o.device}</p>
          <p><b>Status:</b> {o.status}</p>

          <select
            value={o.status}
            onChange={(e) => updateStatus(o._id, e.target.value)}
          >
            <option>Order Received</option>
            <option>Approved</option>
            <option>Device Ordered</option>
            <option>In Production</option>
            <option>Ready for Collection</option>
            <option>Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
}
