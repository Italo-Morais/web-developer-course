import { NavLink } from "react-router-dom";
import { Container } from "./styled";
import { AiFillHome } from "react-icons/ai";
import { IoMdPersonAdd } from "react-icons/io";
import { BsInfoCircleFill, BsTable } from "react-icons/bs";

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
              <AiFillHome/>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "select" : "")}
              to="/register"
            >
              <IoMdPersonAdd/>
              Cadastro
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "select" : "")}
              to="/students"
            >
              <BsTable/>
              Alunos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "select" : "")}
              to="/about"
            >
              <BsInfoCircleFill />
              Sobre
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
