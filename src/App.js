import React, { useState } from 'react';
import Input from './components/input';
import Submit from './components/submit';
import Weather from './components/weather';

export default function App() {
    const [cityName, setCity] = useState("");
    const [clima, setClima] = useState({
        city: "Cidade",
        temperature: "0",
        icon: "01d",
        description: "Céu Limpo"
    });

    function onPressEnter(e) {
        if (e.key === "Enter") {
            onSearch();
        }
    }

    async function onSearch() {
        if (!cityName) {
            return (
                alert("O nome não pode ficar em branco")
            )
        }
        /*SUBSCRIBE HERE FOR API KEY: https://home.openweathermap.org/users/sign_up*/
        const apiKey = "a376594a6a77d7d74ea5a2de80effcc1";
        const filters = "&lang=pt_br&units=metric";
        const url = "https://api.openweathermap.org/data/2.5/weather?q=";
        let urlRequest = await fetch(url + cityName + "&appid=" + apiKey + filters);
        let responseJson = await urlRequest.json();
        if (responseJson.cod === "404") {
            return (
                alert("Cidade Não Encontrada")
            )
        };
        setClima({
            city: responseJson.name,
            temperature: parseInt(responseJson.main.temp),
            icon: responseJson.weather[0].icon,
            description: responseJson.weather[0].description
        });

        setCity("")
    }

    return (
        <div onKeyPress={onPressEnter} >
            <Input value={cityName} onChange={(e) => setCity(e.target.value)} />
            <Submit onClick={onSearch} />
            <Weather clima={clima} />
        </div>
    );
}
