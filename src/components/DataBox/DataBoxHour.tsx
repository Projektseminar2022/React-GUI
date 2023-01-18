import React, {useContext, useState} from "react";
import {WeatherData} from "../../shared/models/WeatherData";
import {WeatherDataSelector} from "./WeatherDataSelector";
import {WeatherDataContext} from "../../App/Dashboard";

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
    const composedWeatherData = useContext(WeatherDataContext);
    const [selectedBox, setSelectedBox] = useState<number>(100000);
    return (
        <div>
            <div className={"flex flex-row justify-center"}>
                <div
                    className={"grid grid-flow-col auto-col-max w-2/4 overflow-hidden overflow-x-hidden overflow-y-hidden"}>
                    {renderDataBoxes(selectedBox, setSelectedBox, composedWeatherData)}
                </div>
            </div>
        </div>
    );
}
