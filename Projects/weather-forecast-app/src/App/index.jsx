import { BsThermometerHigh } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import "./style.css";

export function App() {
  return (
    <div className="container">
      <header>
        <h1>Previsão do Tempo</h1>
        <form action="buscar">
          <label htmlFor="citySearchInput" className="srOnly">
            Pesquisar nome da cidade
          </label>
          <input
            type="text"
            id="citySearchInput"
            placeholder="Nome da cidade"
          />
          <GrSearch className="searchIcon" />
          <button className="searchButton">Buscar</button>
        </form>
      </header>
      <main>
        <article>
          <section className="blockCityName">
            <h2>Jucás, Ceará</h2>
            <p>Brasil, 11/01/2023 15:41:59</p>
          </section>
          <section className="blockCurrentTime">
            <div className="currentTime">
              <div className="blockDegree">
                <BsThermometerHigh className="iconThermometer" />
                <p className="degreeCurrent">35.6°</p>
                <p className="degreeMaxMin">
                  <span className="degreeMax">38.9°</span>
                  <span className="degreeMin">28.7°</span>
                </p>
              </div>
              <div className="blockSituation">
                <img src="#" alt="icon" />
                <div>
                  <p>Pacialmente Sol quente</p>
                  <p>Sensação térmica de 37.2°</p>
                </div>
              </div>
            </div>
          </section>
          <section className="containerWeatherCondition">
            {/* Component */}
          </section>
          <section className="containerWeatherForecast">
            <ol>
              <li>Component 'Map'</li>
            </ol>
          </section>
        </article>
      </main>
      <footer>
        <p>Web Development Course - Jucás</p>
      </footer>
    </div>
  );
}
