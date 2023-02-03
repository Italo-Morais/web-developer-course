import { useState } from 'react'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='form'>
        <h1>Cadastro de Usuário</h1>
          <form className='registration' action="cadastro">
            <section>
              <label htmlFor="name">Nome: 
              <input type="text" id='name' placeholder='digite seu nome' />
              </label>
            </section>
            <section>
              <label htmlFor="lastname">Sobrenome: 
              <input type="text" id='lastname' placeholder='digite seu sobrenome' />
              </label>
            </section>
            <section>
              <label htmlFor="search">Endereço: 
              <input type="search" id='search' placeholder='ex: Jucás, CE'/>
              </label>
            </section>
            <section>
              <label htmlFor="birthday">Data de Nascimento: 
              <input type="date" id='birthday' />
              </label>
            </section>
            <section>
              <label htmlFor="email">Email: 
              <input type="email" id='email' placeholder='ex: email@email.com'/>
              </label>
            </section>
            <section>
              <label htmlFor="cpf">CPF: 
              <input type="number" id='cpf' placeholder='insira seu CPF'/>
              </label>
            </section>
            <section>
              <label htmlFor="tel">Telefone: 
              <input type="tel" id='tel' placeholder='ex: (21)981012997' />
              </label>
            </section>
          </form>
    
          <button className='styleButton' type='submit'>Enviar</button>
    </div>
  )
}

