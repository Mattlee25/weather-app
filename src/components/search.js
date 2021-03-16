import React, { useState } from 'react';
import WeatherBox from './weather';

const api = {
    key: "d23dca2e048c74baf57d6907dd336449",
    base: "https://api.openweathermap.org/data/2.5/"
};

let hour = new Date().getHours();

let defaultBackground = 'app';

if (hour === 6 || hour === 7) defaultBackground = 'app sunrise';
if (hour >= 8 && hour < 18) defaultBackground = 'app day-time';
if (hour === 18) defaultBackground = 'app sunset';

function Search() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [forecastDays, setForecastDays] = useState([]);

    const search = async (e) => {
        if (e.key === "Enter") {
            const response = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
            const result = await response.json();
            const responseAgain = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result.coord.lat}&lon=${result.coord.lon}&exclude={current,minutely,alert,hourly}&appid=${api.key}`);
            const resultAgain = await responseAgain.json();
            setWeather(result);
            setForecastDays(arr => [...arr, resultAgain.daily[0].temp.day, resultAgain.daily[1].temp.day, resultAgain.daily[2].temp.day]);
            setQuery('');
        }
    };

    return (
        <div className={defaultBackground}>
            <div className="blur"></div>
            <main>
                <h3>Weathercast</h3>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="City"
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                <WeatherBox weather={weather} forecastDays={forecastDays}/>
            </main>
        </div>
    );
};

export default Search;