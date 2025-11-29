import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import OrderProgress from "./pages/OrderProgress"; // Page C
import NotFound from "./pages/NotFound"; // optional

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/order-progress" element={<OrderProgress />} />
        <Route path="*" element={<NotFound />} />
        {/* Redirect old paths if needed */}
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
