import { Container } from "./style";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Menu } from "../Menu";
import { Link } from "react-router-dom";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenuIcon = () => setMenuActive(!menuActive);
  return (
    <>
      <Container>
        <button>
          {menuActive ? (
            <IoMdClose className="menuIcon" onClick={toggleMenuIcon} />
          ) : (
            <IoMdMenu className="menuIcon" onClick={toggleMenuIcon} />
          )}
        </button>
        <div className="logoMenu">
          <div>
            <h1>Sistema de Estudantes</h1>
            <h3>Curso de Desenvolvimento Web</h3>
          </div>
          <Link to="/">
            <img src="./logo-rj.png" alt="logo" />
          </Link>
        </div>
      </Container>
      <div onClick={toggleMenuIcon}>
        {menuActive && <Menu />}
      </div>
    </>
  );
};
