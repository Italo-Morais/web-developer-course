import "./style.css";

export function App() {
  return (
    <div className="container">
      <header>
        <h1>Previsão do Tempo</h1>
        <form action="buscar">
          <input type="text" id="buscar" placeholder="Nome da cidade" />
          <button>Buscar</button>
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
                <img src="#" alt="icon" />
                <p>25.6°</p>
                <p>
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
