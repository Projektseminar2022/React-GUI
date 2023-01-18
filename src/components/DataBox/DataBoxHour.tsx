import React, {useEffect, useState} from "react";
import {WeatherData} from "../../shared/models/WeatherData";
import useAPI from "../../shared/UseAPI";
import {WeatherDataSelector} from "./WeatherDataSelector";
import {WeatherInfoBox} from "./WeatherInfoBox";

function renderDataBoxes(selectedBox: number, setSelectedBox: React.Dispatch<React.SetStateAction<number>>, weatherData: WeatherData[] = []) {
    let dataBoxes = [];

    for (let i = 0; i < weatherData.length; i++) {
        dataBoxes.push(
            <div id={`box-${weatherData[i].weather.dt}`}>
                    <WeatherDataSelector boxdata={weatherData[i]} selected={selectedBox} setSelected={setSelectedBox}
                                         akey={weatherData[i].weather.dt}/>
             </div>
                );
    }
    return dataBoxes;
}

export default function DataBoxHour() {
    //Get the lat and long from the user or
    let latitude = 50.733334;
    let longitude = 7.1;

    const weatherAPI = useAPI<WeatherData[]>("getWeatherForecast", latitude, longitude); //TODO finish this
    const [selectedWeatherData, setSelectedWeatherData] = useState<WeatherData | undefined>();
    const [composedWeatherData, setComposedWeatherData] = useState<WeatherData[]>([]);
    const [selectedBox, setSelectedBox] = useState<number>(100000);

    useEffect(() => {
        weatherAPI.getData()
    }, [selectedBox])

    useEffect(() => {
        setComposedWeatherData(weatherAPI.data);
    }
    , [weatherAPI.data])

    useEffect(() => {
        if (composedWeatherData.length > 0){
            setSelectedBox(composedWeatherData[0].weather.dt);
            setSelectedWeatherData(composedWeatherData[0]);
        }
    }, [composedWeatherData])

    useEffect(() => {
        weatherAPI.getData()
    }, [])

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
                    <div className={"grid grid-flow-col auto-col-max w-2/4 overflow-hidden overflow-x-hidden overflow-y-hidden"}>
                        {renderDataBoxes(selectedBox, setSelectedBox, composedWeatherData)}
                    </div>
                </div>

                {/*<div className={"flex justify-center"}>*/}
                {/*    <WeatherInfoBox boxData={selectedWeatherData}/>*/}
                {/*</div>*/}

                {/*  see: https://i.imgur.com/WOCsOrK.png   */}
            </div>
        );
    // }
}
