import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import OrderProgress from "./pages/OrderProgress";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/order-progress" element={<OrderProgress />} />
      <Route path="*" element={<NotFound />} />

      {/* Old URL redirect */}
      <Route path="/home" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
