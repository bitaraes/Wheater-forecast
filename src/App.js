import React, { useState } from 'react';
import Input from './components/input';
import Submit from './components/submit';
import Weather from './components/weather';

export default function App() {
    const [cityName, setCity] = useState("")
    const [clima, setClima] = useState({
        city: "Cidade",
        temperature: "0",
        icon: "01d",
        description: "Céu Limpo"
    })

    async function onSearch() {
        /*SUBSCRIBE HERE FOR API KEY: https://home.openweathermap.org/users/sign_up*/
        const apiKey = "&appid=a376594a6a77d7d74ea5a2de80effcc1&lang=pt_br&units=metric";
        const url = "http://api.openweathermap.org/data/2.5/weather?q=";
        let urlRequest = await fetch(url + cityName + apiKey);
        let responseJson = await urlRequest.json();
        setClima({
            city: responseJson.name,
            temperature: parseInt(responseJson.main.temp),
            icon: responseJson.weather[0].icon,
            description: responseJson.weather[0].description
        })
    }

    return (
        <div>
            <Input value={cityName} onChange={(e) => setCity(e.target.value)} />
            <Submit onClick={onSearch} />
            <Weather clima={clima} />
        </div>
    )
}
