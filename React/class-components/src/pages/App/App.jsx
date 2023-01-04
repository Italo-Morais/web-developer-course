import "./App.css";
import { CardPerfil } from "../../components/CardPerfil/index";

export function App() {
  return (
    <div className="conteiner">
      <h1>Class Components</h1>
    <CardPerfil
      login='Italo-Morais'
      name='Italo Morais'
      age={23} />
    <CardPerfil 
      login='EmanuelQuintino'
      name='Emanuel'
      age={30} />
    <CardPerfil 
      login='Mario13Sergio'
      name='Mario Sergio'
      age={30} />
    </div>
  )
}
