import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/PatientDashboard";
import AdminOrders from "./pages/AdminOrders";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Sidebar />

      <main style={{ marginLeft: "220px", padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/admin" element={<AdminOrders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
