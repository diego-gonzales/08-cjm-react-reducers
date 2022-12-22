import { NavLink } from "react-router-dom";

const activeStyle = {
  backgroundColor: "#c9db62",
  color: "#000",
  pointerEvents: "none"
}

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/counter"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/counter-improved"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Counter Improved
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shopping-cart"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shopping cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
