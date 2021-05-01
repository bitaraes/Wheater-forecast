import React, {useState, useEffect} from 'react'

export default function Weather(){
    const [clima, setClima] = useState({city:"Cidade", temperature:"0", icon:"01d", description:"Céu Limpo"})

    useEffect(() => {
        document.querySelector("input[name=search-btn]")
        .addEventListener("click", async function(e){
            const apiKey = "&appid=a376594a6a77d7d74ea5a2de80effcc1&lang=pt_br&units=metric";
            const url = "http://api.openweathermap.org/data/2.5/weather?q=";
            let cityName = document.querySelector("input[name=search-txt]").value;
            let urlRequest = await fetch(url+cityName+apiKey);
            let responseJson = await urlRequest.json();

            await setClima({
                city: responseJson.name, 
                temperature: parseInt(responseJson.main.temp), 
                icon: responseJson.weather[0].icon, 
                description: responseJson.weather[0].description 
            })
        });
    });

    return(
        <div className="weather-report">
            <div className="city"><h2>{clima.city}</h2></div>
            <div className="temp">{clima.temperature}º</div>
            <img src={`http://openweathermap.org/img/wn/${clima.icon}@2x.png`} alt="Clima"></img>
            <div className="description">{clima.description}</div>
        </div>
    )
}