import { NavLink } from "react-router-dom";
import "./index.css";
const Header = () => {
  return (
    <nav>
      <div className="nav-logo-wrapper">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="nav-logo"
          alt=" website logo"
        />
      </div>
      <div className="nav-container">
        <ul>
          <li>
            <NavLink className="nav-link-items">Home</NavLink>
          </li>
          <li>
            <NavLink className="nav-link-items">Products</NavLink>
          </li>
          <li>
            <NavLink className="nav-link-items">Cart</NavLink>
          </li>
        </ul>
        <button className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Header;
