import {WeatherData} from "../../shared/models/WeatherData";
import React from "react";

export function WeatherInfoBox(props: { boxData: WeatherData | undefined}) {
    if (props.boxData === undefined) {
        return (
            <div className={"border rounded-md h-fit w-fit m-3 p-3 border-gray-600"}>
                <div className={"flex flex-col"}>
                    <div className={"flex justify-center"}>
                        <img src={"https://openweathermap.org/img/w/10d.png"} className={"w-10 h-10"}/>
                    </div>
                    <div className={"flex justify-center"}>
                        <span className={"text-xl font-bold"}>Loading</span>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={"flex justify-center"}>
                <div className={"grid grid-cols-3 gap-10 mt-3"}>
                    <div className={"flex flex-col justify-center"}>
                        <h3 className={"text-1xl font-extrabold"}>Niederschlag</h3>
                        {/*{props.boxData.weather.rain === null ?*/}
                        {/*    <span className={"text-xl font-bold"}>0mm</span>*/}
                        {/*    :*/}
                        {/*    <span className={"text-xl font-bold"}>{props.boxData.rain}mm</span>}*/}
                        <p className={"text"}>{}% Risiko</p>
                        <p className={"text"}>{} l/m^2</p>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <h3 className={"text-1xl font-extrabold"}>Wind</h3>
                        <p className={"text"}>{props.boxData.weather.wind_speed} km/h</p>
                        <p className={"text"}>aus {props.boxData.weather.wind_deg}°</p>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <h3 className={"text-1xl font-extrabold"}>Böen</h3>
                        <p className={"text"}>{props.boxData.weather.wind_gust} km/h</p>
                        <p className={"text"}>aus {props.boxData.weather.wind_deg}°</p>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <h3 className={"text-1xl font-extrabold"}>Sonnenschein</h3>
                        {/*<p className={"text"}>{props.boxData.weather.} Min</p>*/}
                        <p className={"text"}>{props.boxData.weather.uvi} UV</p>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <h3 className={"text-1xl font-extrabold"}>Luftfeuchte</h3>
                        <p className={"text"}>{props.boxData.weather.humidity}% bei</p>
                        <p className={"text"}>{props.boxData.weather.pressure} hPa</p>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <h3 className={"text-1xl font-extrabold"}>Gefühlt</h3>
                        <p className={"text"}>{props.boxData.weather.feels_like}°</p>
                    </div>
                </div>
            </div>
        );
    }
}