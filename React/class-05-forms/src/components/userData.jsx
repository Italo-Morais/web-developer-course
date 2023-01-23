import { GlobalVariables } from "../global"

export function UserData() {
  return(
    <>
    <h1>Dados do aluno:</h1>
    <p>Nome: {GlobalVaribles.user.name}</p>
    <p>E-mail:</p>
    </>
  )
}