import { FormRegister } from "../../components/FormRegister";
import { Container } from "./styled"

export function Register() {
  return (
    <Container>
      <h1>Cadastrar Aluno</h1>
      <FormRegister />
    </Container>
  )
}