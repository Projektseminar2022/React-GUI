import React, {useEffect, useState} from "react";
import {BoxData} from "../shared/models/BoxData";
import {BoxDataSimple} from "../shared/models/BoxDataSimple";
import useAPI from "../shared/UseAPI";

export default function DataBoxHour() {
    let date = new Date();

    //get the data for the hours until 12pm from the api
    const boxAPI = useAPI<BoxData>("getBoxDataSimple", date.getTime(), 12); //TODO finish this
    const [boxData, setBoxData] = useState<BoxData>({
        humidity_in_percent: 0,
        pressure_in_hpa: 0,
        rainfall_amount: 0,
        rainfall_risk: 0,
        sunshine_duration_in_min: 0,
        sunshine_uv_index: 0,
        temp_feel: 0,
        wind_direction: "",
        wind_gust_direction: "",
        wind_gust_speed: 0,
        wind_speed: 0,
        desc: "", icon: "", id: 0, selected: false, temp: 0, time: ""});
    const [selectedBox, setSelectedBox] = useState<number>(100000);
    const [boxDataSimple, setBoxDataSimple] = useState<BoxDataSimple>({extended: "", id: 0, temp: 0, time: ""});

    useEffect(() => {
        boxAPI.getData()
    }, [selectedBox])

    useEffect(() => {
        setBoxData(boxAPI.data);
    }
    , [boxAPI.data])

    //create an array of 10 mockup weather data
    const mockupData = [
        {
            "id": 1,
            "time": "12:00",
            "temperature": 12,
            "description": "Cloudy",
            "icon": "https://openweathermap.org/img/wn/04d.png",
            "selected": true
        },
        {
            "id": 2,
            "time": "13:00",
            "temperature": 11,
            "description": "Cloudy",
            "icon": "https://openweathermap.org/img/wn/04d.png",
            "selected": false
        },
        {
            "id": 3,
            "time": "14:00",
            "temperature": 12,
            "description": "Cloudy",
            "icon": "https://openweathermap.org/img/wn/04d.png",
            "selected": false
        },
        {
            "id": 4,
            "time": "15:00",
            "temperature": 13,
            "description": "Cloudy",
            "icon": "https://openweathermap.org/img/wn/04d.png",
            "selected": false
        },
        {
            "id": 5,
            "time": "16:00",
            "temperature": 14,
            "description": "Cloudy",
            "icon": "https://openweathermap.org/img/wn/04d.png",
            "selected": false
        },
    ];

    return (
        <div>
            <h1 className={"text-2xl font-bold"}>Stündlich</h1>
            <div className="divider"></div>
            <div className={"flex flex-row justify-center"}>
                {/*iterate over the mock data*/}
                {mockupData.map((data, key) => (
                  <DataBox boxData={boxData} selected={selectedBox} setSelected={setSelectedBox} akey={key}/>
                    )
                )}
            </div>


        <WeatherInfo boxData={boxData} />

        {/*  see: https://i.imgur.com/WOCsOrK.png   */}
        </div>

    );
}

function DataBox(props: { boxData: BoxData, selected: number, setSelected: React.Dispatch<React.SetStateAction<number>>, akey: number}) {
    const apiBoxData = useAPI<BoxData>("getBoxDataSimple", props.akey, 0);
    return (
        <div className={`border rounded-md h-fit w-fit m-3 p-3 ${props.selected === props.akey ? "border-primary" : "border-gray-600"}`}
            onClick={() => {
                props.setSelected(props.akey);
                console.log(props.selected);
            }}
        >
            <div className={"flex flex-col"}>
                <span className={"text-xl font-bold"}>{props.boxData.time}</span>
                <div className={"flex justify-center"}>
                    <img src={props.boxData.icon} className={"w-10 h-10"}/>
                </div>
                <div className={"flex justify-center"}>
                    <span className={"text-xl font-bold"}>{props.boxData.temp}°</span>
                </div>
            </div>
        </div>

    );
}

function WeatherInfo(props : { boxData: BoxData }) {
    return (
    <div className={"flex justify-center"}>
        <div className={"grid grid-cols-3 gap-10 mt-3"}>
            <div className={"flex flex-col justify-center"}>
                <h3 className={"text-1xl font-extrabold"}>Niederschlag</h3>
                <p className={"text"}>{props.boxData.rainfall_risk}% Risiko</p>
                <p className={"text"}>{props.boxData.rainfall_amount} l/m^2</p>
            </div>
            <div className={"flex flex-col justify-center"}>
                <h3 className={"text-1xl font-extrabold"}>Wind</h3>
                <p className={"text"}>{props.boxData.wind_speed} km/h</p>
                <p className={"text"}>aus {props.boxData.wind_direction}</p>
            </div>
            <div className={"flex flex-col justify-center"}>
                <h3 className={"text-1xl font-extrabold"}>Böen</h3>
                <p className={"text"}>{props.boxData.wind_gust_speed} km/h</p>
                <p className={"text"}>aus {props.boxData.wind_gust_direction}</p>
            </div>
            <div className={"flex flex-col justify-center"}>
                <h3 className={"text-1xl font-extrabold"}>Sonnenschein</h3>
                <p className={"text"}>{props.boxData.sunshine_duration_in_min} Min</p>
                <p className={"text"}>{props.boxData.sunshine_uv_index} UV</p>
            </div>
            <div className={"flex flex-col justify-center"}>
                <h3 className={"text-1xl font-extrabold"}>Luftfeuchte</h3>
                <p className={"text"}>{props.boxData.humidity_in_percent}% bei</p>
                <p className={"text"}>{props.boxData.pressure_in_hpa} hPa</p>
            </div>
            <div className={"flex flex-col justify-center"}>
                <h3 className={"text-1xl font-extrabold"}>Gefühlt</h3>
                <p className={"text"}>{props.boxData.temp_feel}°</p>
            </div>
        </div>
    </div>
    );
}