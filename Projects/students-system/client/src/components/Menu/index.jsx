import { NavLink } from "react-router-dom";
import { Container } from "./styled";

export function Menu() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "select" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "select" : "")}
              to="/register"
            >
              Cadastro
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "select" : "")}
              to="/students"
            >
              Alunos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "select" : "")}
              to="/about"
            >
              Sobre
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
