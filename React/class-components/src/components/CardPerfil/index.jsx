import "./style.css"
import React from "react"

// export function CardPerfil({login, name, age}) {
//   return(
//     <div className="containerCard">
//       <img src={`https://github.com/${login}.png`} alt="image-user" />
//       <p>Nome: {name}</p>
//       <p>Idade: {age}</p>
//     </div>
//   )
// }

export class CardPerfil extends React.Component{
  render() {
     <div className="containerCard">
       <img src={`https://github.com/${login}.png`} alt="image-user" />
       <p>Nome: {this.props.name}</p>
       <p>Idade: {this.props.age}</p>
    </div>
  }
} 