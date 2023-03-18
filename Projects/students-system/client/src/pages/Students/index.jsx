import { HandleStudents } from "../../components/HandleStudents";
import { Container } from "./styled";

export function Students() {
  return (
    <div className="Home">
      <Container>
        <HandleStudents />
      </Container>
    </div>
  );
}
