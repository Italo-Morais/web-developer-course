
import reactLogo from './assets/react.svg'
import './App.css'
import { UserData } from './components/userData';

 export default function App() {

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target.name.value)
    const name = event.target.name.value;
    const email = event.target.email.value;
    const course = event.target.course.value;
    const question = event.target.question.value;
    const term = event.target.term.value;
    const skill = event.target.skill

    const userData = {
      name,
      email,
      course,
      question,
      term,
      skill: [...skill].map((element) => {
        return element.checked ? element.value : null;
      })
    }
    console.log(userData)
    console.log(JSON.stringify(userData));
    GlobalVariables.user
  }
  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <section><label htmlFor="">Name:
          <input type="text" name='name' />
        </label>
        </section>

        <section><label htmlFor="">Email:
          <input type="text" name='email' />
        </label>
        </section>
        <section><label htmlFor="">Curso:
          <select name="course" id="">
          <option value="react">React</option>
          <option value="node">Node</option>
          </select>
        </label>
        </section>
        <section>
          <label htmlFor="">Por que voce quer fazer esse curso?:</label>
          <textarea name="question" id="" cols="30" rows="2"></textarea>
        </section>
        <section>
          <div>
            Matérias de aptidão
          </div>

          <div>
            <label htmlFor="">HTML
              <input type="checkbox" value='html' name='skill' />
            </label>
            <label htmlFor="">CSS
              <input type="checkbox" value='css' name='skill' />
            </label>
            <label htmlFor="">JavaScript
              <input type="checkbox" value='java' name='skill' />
            </label>
          </div>

          <label htmlFor="">
            <input type="radio" value='yes' name='term'/>Sim
          </label>
          <label htmlFor="">
            <input type="radio" value='no' name='term'/>Não
          </label>
        </section>
        <button type='submit'>Enviar</button>
      </form>
      </div>
  )
}

