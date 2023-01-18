import WeatherHero from "../components/WeatherHero";
import DataBoxHour from "../components/DataBox/DataBoxHour";
import {WeatherData} from "../shared/models/WeatherData";
import React, {useEffect, useState} from "react";
import useAPI from "../shared/UseAPI";
import LoadingSpinner from "../components/utility/LoadingSpinner";
import ErrorFlag from "../components/utility/ErrorFlag";

export const WeatherDataContext = React.createContext<WeatherData[] | undefined>(undefined);

export default function Dashboard() {

    //Get the lat and long from the user or
    let latitude = 50.733334;
    let longitude = 7.1;

    const weatherAPI = useAPI<WeatherData[]>("getWeatherForecast", latitude, longitude); //TODO finish this
    const [composedWeatherData, setComposedWeatherData] = useState<WeatherData[]>([]);

    useEffect(() => {
            setComposedWeatherData(weatherAPI.data);
    },[weatherAPI.data])

    useEffect(() => {
        weatherAPI.getData()
    }, [])

    if (weatherAPI.isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <LoadingSpinner/>
            </div>
        )
    } else if (weatherAPI.error.length !== 0) {
        return <ErrorFlag message={weatherAPI.error}/>
    } else {
        return (
            <WeatherDataContext.Provider value={composedWeatherData}>
                <div className={"w-full h-full"}>
                    <WeatherHero/>
                    <div className={"divider"}></div>
                    <DataBoxHour/>
                </div>
            </WeatherDataContext.Provider>
        )
    }
}