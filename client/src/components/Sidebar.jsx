import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">Mmola Orthopro</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
