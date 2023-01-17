import { useState, useEffect } from "react" 
import { BsThermometerHigh } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import { ClimateCard } from "../components/ClimateCard"
import "./style.css";

export function App() {
  const [searchedCity, setSearchedCity] = useState('jucas')
  const [inputCity, setInputCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  

  async function getCityWeather() {
    const response = await fetch(API)
    console.log(response)

      if (response.status == 200) {
        const data = await response.json()
        console.log(data)
        setWeatherData(data)
      } else if (response.status == 400) {
        alert('Cidade não encontrada')
      }
  }

  function searchCity(event) {
    event.preventDefault()
    setSearchedCity(inputCity)
  }

  useEffect(() => {
    getCityWeather()
  }, [searchedCity])

  const API = `https://api.weatherapi.com/v1/forecast.json?key=fb85b303e1fe4286a2b15407223112&q=${searchedCity}&days=4&lang=pt`
  return (
    <div className="container">
      <header>
        <h1>Previsão do Tempo</h1>
        <form action="buscar" onSubmit={searchCity}>
          <label htmlFor="citySearchInput" className="srOnly">
            Pesquisar nome da cidade
          </label>
          <input
            type="text"
            id="citySearchInput"
            placeholder="Nome da cidade"
            onChange={(event) => setInputCity(event.target.value)}
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
            < ClimateCard />
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
