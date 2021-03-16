import React from 'react';

function WeatherBox({weather, forecastDays}) {

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    const date = (d) => {
        let day = days[d.getDay()];
        return `${day}`;
    };

    const futureDate = (d) => {
        let day = days[d.getDay()];
        if (day == "Sat") return "Sun";
        return `${days[d.getDay()+1]}`
    };

    const futureTwoDate = (d) => {
        let day = days[d.getDay()];
        if (day == "Sat") return "Mon";
        if (day == "Fri") return "Sun"
        return `${days[d.getDay() + 2]}`
    };

    const futureThreeDate = (d) => {
        let day = days[d.getDay()];
        if (day == "Sat") return "Tues";
        if (day == "Fri") return "Mon"
        if (day == "Thurs") return "Sun"
        return `${days[d.getDay() + 3]}`
    };

    console.log(forecastDays)

    return (
        <>
            {(typeof weather.main != "undefined") ? (
                <div className="info">
                    <div className="weather-box">
                        <div className="location-box">
                            <div className="location">{weather.name}</div>
                        </div>
                        <div className="weather">
                            <span className="date">{date(new Date())}, </span>
                            {weather.weather[0].main}
                        </div>
                        <div className="temp">
                            {Math.round(weather.main.temp * 1.8 + 32)}<span>&#8457;</span>
                        </div>
                        <div className="high-low-temp">
                            H : {Math.round(weather.main.temp_max * 1.8 + 32)} | L : {Math.round(weather.main.temp_min * 9 / 5 + 32)}
                        </div>
                    </div>
                    <div className="forecast">
                        <div className="forecast-item">
                            <div>{futureDate(new Date())}</div>
                            <div>{Math.round(1.8 * (forecastDays[0] - 273) + 32)}&#176;</div>
                        </div>
                        <div className="forecast-item">
                            <div>{futureTwoDate(new Date())}</div>
                            <div>{Math.round(1.8 * (forecastDays[1] - 273) + 32)}&#176;</div>
                        </div>
                        <div className="forecast-item">
                            <div>{futureThreeDate(new Date())}</div>
                            <div>{Math.round(1.8 * (forecastDays[2] - 273) + 32)}&#176;</div>
                        </div>
                    </div>
                </div>
            ) : ('')}
        </>
    );

};

export default WeatherBox;