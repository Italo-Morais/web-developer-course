import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Container } from "./style";
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <Container>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Web Developer Course</p>
      </footer>
    </Container>
  );
}
