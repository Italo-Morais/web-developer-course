import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/react.svg";
import "./style.css";

export function Header() {
  return (
    <header>
      <div className="containerLogo">
        <Link to={"/"}>
          <img src={logo} alt="icon" />
        </Link>
        <h1>Class Routes</h1>
      </div>
      <nav>
        <ul>
          <NavLink
            className={(NavLink) => (NavLink.isActive ? "active" : "")}
            to={"/"}
          >
            <li>Home</li>
          </NavLink>
          <NavLink to={"/gallery"}>
            <li>Gallery</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
