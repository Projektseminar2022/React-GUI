import React, {useEffect, useState} from "react";
import {WeatherData} from "../../shared/models/WeatherData";
import useAPI from "../../shared/UseAPI";
import {WeatherDataSelector} from "./WeatherDataSelector";
import {WeatherInfoBox} from "./WeatherInfoBox";

function renderDataBoxes(selectedBox: number, setSelectedBox: React.Dispatch<React.SetStateAction<number>>, weatherData: WeatherData[] = []) {
    let dataBoxes = [];

    for (let i = 0; i < weatherData.length; i++) {
        dataBoxes.push(
            <div id={`box-${i}`} className="carousel-item relative w-full">
                <div className={"p-20"}>
                    <WeatherDataSelector boxdata={weatherData[i]} selected={selectedBox} setSelected={setSelectedBox}
                                         akey={weatherData[i].weather.dt}/>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href={`#box-${i-1 < 0 ? weatherData.length : i-1}`} className="btn btn-circle">❮</a>
                    <a href={`#box-${i+1 > weatherData.length ? 0 : i+1}`} className="btn btn-circle">❯</a>
                </div>
            </div>
                );
    }
    return dataBoxes;
}

export default function DataBoxHour() {
    //Get the lat and long from the user or
    let latitude;
    let longitude;

    const weatherAPI = useAPI<WeatherData>("getWeatherForecast", latitude, longitude); //TODO finish this
    const [selectedWeatherData, setSelectedWeatherData] = useState<WeatherData | undefined>({
        "longitude": 7.1,
        "latitude": 50.733334,
        "expectedFor": "2023-01-18T13:00:00Z",
        "lastUpdate": "2023-01-18T13:35:57.9464229Z",
        "weather": {
            "dt": 1674046800,
            "temp": 3.3,
            "feels_like": 0.58,
            "pressure": 998,
            "humidity": 67,
            "dew_point": -1.97,
            "uvi": 0.39,
            "clouds": 24,
            "visibility": 10000,
            "wind_speed": 2.86,
            "wind_deg": 276,
            "wind_gust": 4.63,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "Ein paar Wolken",
                    "icon": "02d"
                }
            ],
            "pop": 0,
            "rain": null
        }
    });
    const [composedWeatherData, setComposedWeatherData] = useState<WeatherData[]>([]);
    const [selectedBox, setSelectedBox] = useState<number>(100000);

    useEffect(() => {
        weatherAPI.getData()

    }, [selectedBox])

    useEffect(() => {
        setComposedWeatherData([weatherAPI.data]);
        if (composedWeatherData.length > 0) {
            setSelectedBox(composedWeatherData[0].weather.dt);
            setSelectedWeatherData(composedWeatherData[0]);
        }
    }
    , [weatherAPI.data])

    if (weatherAPI.isLoading) {
        return <div>Loading...</div>
    } else if (weatherAPI.error.length !== 0) {
        return <div>{weatherAPI.error}</div>
    } else {
        return (
            <div>
                <h1 className={"text-2xl font-bold"}>Stündlich</h1>
                <div className="divider"></div>
                <div className={"flex flex-row justify-center"}>
                    <div className={"carousel w-2/4"}>
                        {renderDataBoxes(selectedBox, setSelectedBox, composedWeatherData)}
                    </div>
                </div>

                <div className={"flex justify-center"}>
                    <WeatherInfoBox boxData={selectedWeatherData}/>
                </div>

                {/*  see: https://i.imgur.com/WOCsOrK.png   */}
            </div>
        );
    }
}
