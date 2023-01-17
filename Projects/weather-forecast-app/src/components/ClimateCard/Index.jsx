import "./Style.css"

export function ClimateCard({climate, condition}) {
    return (
        <div className="containerWeatherCondition">
            <p>{condition}</p>
            <h4>{climate}</h4>
        </div>
    )
}