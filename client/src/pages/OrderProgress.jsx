import React, { useState, useEffect } from "react";

// Mock data for now
const mockOrders = [
  { id: 1, patientName: "John Doe", device: "Prosthetic Leg", status: "Device Ordered" },
  { id: 2, patientName: "Jane Smith", device: "Orthopedic Brace", status: "Device in Production" },
  { id: 3, patientName: "Mike Johnson", device: "Prosthetic Arm", status: "Device Ready for Collection" },
];

const statusOptions = [
  "Device Ordered",
  "Device in Production",
  "Device Ready for Collection",
  "Delivered",
];

const statusColors = {
  "Device Ordered": "bg-blue-200 text-blue-800",
  "Device in Production": "bg-yellow-200 text-yellow-800",
  "Device Ready for Collection": "bg-purple-200 text-purple-800",
  "Delivered": "bg-green-200 text-green-800",
};

export default function OrderProgress() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(mockOrders);
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);

    // TODO: send update to backend here
    console.log(`Order ${orderId} status updated to: ${newStatus}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">Order Progress Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map(order => (
          <div key={order.id} className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{order.patientName}</h2>
            <p className="text-gray-600 mb-3">Device: <span className="font-medium">{order.device}</span></p>
            
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[order.status]}`}>
                {order.status}
              </span>
              
              <select
                value={order.status}
                onChange={e => handleStatusChange(order.id, e.target.value)}
                className="border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {statusOptions.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
