import React from 'react';

function WeatherBox({weather}) {

    const date = (d) => {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];

        return `${day}`;
    };

    return (
        <>
            {(typeof weather.main != "undefined") ? (
                <div className="info">
                    
                    <div className="weather-box">
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{date(new Date())}</div>
                        </div>
                        <div className="weather">
                            {weather.weather[0].main}
                        </div>
                        <div className="temp">
                            {Math.round(weather.main.temp * 9 / 5 + 32)}<span>&#8457;</span>
                        </div>
                        <div className="high-low-temp">
                                L : {Math.round(weather.main.temp_min * 9 / 5 + 32)} | H : {Math.round(weather.main.temp_max * 9 / 5 + 32)}
                        </div>
                    </div>
                </div>
            ) : ('')}
        </>
    );

};

export default WeatherBox;