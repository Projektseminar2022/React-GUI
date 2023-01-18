import {WeatherData} from "../../shared/models/WeatherData";
import React from "react";


export function WeatherDataSelector(props: { boxdata: WeatherData, selected: number, setSelected: React.Dispatch<React.SetStateAction<number>>, akey: number }) {
    const getHourFromUnix = function (unix: number) {
        let date = new Date(unix * 1000);
        return date.getHours();
    }

    return (
        <div
            className={`border rounded-md h-fit w-auto m-3 p-3 hover:cursor-pointer ${props.selected === props.akey ? "border-primary" : "border-gray-600"}`}
            onClick={() => {
                props.setSelected(props.akey);
                debugger
                console.log(props.selected);
            }}
        >
            <div className={"flex flex-col"}>
                <span className={"text-xl font-bold whitespace-nowrap"}>{getHourFromUnix(props.boxdata.weather.dt)} Uhr</span>
                {/*<div className={"flex justify-center"}>*/}
                {/*    <img src={props.boxdata.weather.weather[0].icon} className={"w-10 h-10"}/>*/}
                {/*</div>*/}
                <div className={"flex justify-center"}>
                    <span className={"text-xl font-bold"}>{props.boxdata.weather.temp}°</span>
                </div>
            </div>
        </div>
    );
}
