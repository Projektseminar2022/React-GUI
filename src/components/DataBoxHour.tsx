import React from "react";

export default function DataBoxHour() {

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
                {mockupData.map((data) => (
                  <DataBox time={data.time} temp={data.temperature} icon={data.icon} active={data.selected}/>
                    )
                )}
            </div>

            <div className={"flex justify-center"}>
                <div className={"grid grid-cols-3 gap-10 mt-3"}>
                    <div className={"flex flex-col justify-center"}>
                        <h3 className={"text-1xl font-extrabold"}>Niederschlag</h3>
                        <p className={"text"}>0% Risiko</p>
                        <p className={"text"}>0,0 l/m^2</p>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <h3 className={"text-1xl font-extrabold"}>Wind</h3>
                        <p className={"text"}>10 km/h</p>
                        <p className={"text"}>aus NO</p>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <h3 className={"text-1xl font-extrabold"}>Böen</h3>
                        <p className={"text"}>11 km/h</p>
                        <p className={"text"}>aus NO</p>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <h3 className={"text-1xl font-extrabold"}>Sonnenschein</h3>
                        <p className={"text"}>0 Min</p>
                        <p className={"text"}>0 UV</p>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <h3 className={"text-1xl font-extrabold"}>Luftfeuchte</h3>
                        <p className={"text"}>82% bei</p>
                        <p className={"text"}>1.023 hPa</p>
                    </div>
                    <div className={"flex flex-col justify-center"}>
                        <h3 className={"text-1xl font-extrabold"}>Gefühlt</h3>
                        <p className={"text"}>5°</p>
                    </div>
                </div>
            </div>

        {/*  see: https://i.imgur.com/WOCsOrK.png   */}
        </div>

    );
}

function DataBox(props: {time: string, temp: number, icon: string, active?: boolean}) {
    return (
        <div className={`border rounded-md h-fit w-fit m-3 p-3 ${props.active ? "border-primary" : "border-gray-600"}`}>
            <div className={"flex flex-col"}>
                <span className={"text-xl font-bold"}>{props.time}</span>
                <div className={"flex justify-center"}>
                    <img src={props.icon} className={"w-10 h-10"}/>
                </div>
                <div className={"flex justify-center"}>
                    <span className={"text-xl font-bold"}>{props.temp}°</span>
                </div>
            </div>
        </div>

    );
}

