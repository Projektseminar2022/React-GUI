import {WeatherData} from "../../shared/models/WeatherData";
import React from "react";
import {WeatherInfoBox} from "./WeatherInfoBox";

export function WeatherDataSelector(props: { boxdata: WeatherData, selected: number, setSelected: React.Dispatch<React.SetStateAction<number>>, akey: number }) {
    const getHourFromUnix = function (unix: number) {
        let date = new Date(unix * 1000);
        return date.getHours();
    }

    return (
        <div className={"w-fit"}>
            <div className={`border rounded-md h-fit w-fit m-3 p-3 hover:cursor-pointer ${props.selected === props.akey ? "border-primary" : "border-gray-600"}`}

                onClick={() => {
                    props.setSelected(props.akey);
                    console.log(props.selected);
                    document.getElementById("box-" + props.akey)?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center"
                    });
                }}>
                <div className={"flex flex-col select-none"}>
                    <span
                        className={"text-xl font-bold whitespace-nowrap"}>{getHourFromUnix(props.boxdata.weather.dt)} Uhr</span>
                    <div className={"flex justify-center"}>
                        <span className={"text-xl font-bold"}>{props.boxdata.weather.temp}°</span>
                    </div>
                </div>
            </div>
            <div className={"w-max object-center absolute left-[40%]"}>
                {props.akey === props.selected ? <WeatherInfoBox boxData={props.boxdata}/> : null}
            </div>
        </div>
    );
}
