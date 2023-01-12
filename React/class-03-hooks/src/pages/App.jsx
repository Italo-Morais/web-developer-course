import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

export function App() {
  const [name, setName] = useState("Emanuel");
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [data, setData] = useState("");
  // let count = 0;
  // console.log(name);
  
  useEffect(() => {
    if (text2) {
      fetch(`https://api.github.com/users/${text2}`)
    .then((response) => response.json())
    .then(data => setData(data))
    }
  }, [text2])


  return (
    <div className="container">
      {/* <h1>Class Hooks</h1>
      <p>Nome: {name}</p>
      <p>Number: {count}</p>
      <button onClick={() => {
        setCount(count + 1)
        console.log(count);
      }}>Contar</button> */}

      <form action="">
        <p>Palavra: {text}</p>
        <p>Palavra: {text2}</p>
        <input type="text" onChange={() => setText(event.target.value)} />
        <button
          onClick={(event) => {
            event.preventDefault();
            setText2(text);
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
