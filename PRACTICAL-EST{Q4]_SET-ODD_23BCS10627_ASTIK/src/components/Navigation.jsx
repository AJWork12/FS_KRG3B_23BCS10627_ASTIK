import { Link } from "react-router-dom";
import "../styles/Navigation.css";

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          MyApp
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/homepage" className="navbar-link">
              Homepage
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
