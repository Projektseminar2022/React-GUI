import React, {useEffect, useState} from "react";
import {WeatherDataContext} from "../App/Dashboard";
import {WeatherData} from "../shared/models/WeatherData";
import LoadingSpinner from "./utility/LoadingSpinner";


export default function WeatherHero() {

    // const unixTimestamp = Math.floor(new Date().getTime() / 1000);
    const composedWeatherData = React.useContext(WeatherDataContext);
    const [currentWeatherData, setCurrentWeatherData] = useState<WeatherData>();

    useEffect(() => {
        setCurrentWeatherData(composedWeatherData?.find((value) => value.weather.dt === 1674144000));
    }, []);

    if (currentWeatherData) {
        return (
            <div>
                <div>
                    <h1 className={"text-5xl"}>Wetter</h1>
                    <p className={"text-l"}>Standort:
                        Lat: {currentWeatherData.latitude} Long: {currentWeatherData.longitude}</p>
                </div>
                <div className="divider"></div>
                <div className="hero text-white min-h-max bg-gradient-to-r from-sky-500 to-indigo-500 justify-start">
                    <div className="hero-content flex-col lg:flex-row justify-start">

                        <div>
                            {/*TODO Das Wetterdaten-array kann mehr als nur ein Element haben*/}
                            <span className="inline-flex items-center px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-full text-sm font-semibold text-gray-600">
	                            <span className="ml-1">
	                                Aktuell
	                            </span>
                            </span>
                            <h1 className="text-5xl font-bold">{currentWeatherData.weather.weather[0].main}</h1>
                            <h2 className="text-3xl font-bold">{currentWeatherData.weather.temp}°</h2>
                            <p className="py-6">{currentWeatherData.weather.weather[0].description}</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    } else {
        return (
            <LoadingSpinner/>
        )
    }
}
