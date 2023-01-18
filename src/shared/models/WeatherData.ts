import {WeatherDesc} from "./WeatherDesc";

export interface WeatherData {
    longitude: number,
    latitude: number,
    expectedFor: string,
    lastUpdate: string,
    weather: {
        dt: number,
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
        dew_point: number,
        uvi: number,
        clouds: number,
        visibility: number,
        wind_speed: number,
        wind_deg: number,
        wind_gust: number,
        weather: WeatherDesc[],
        pop: number,
        rain: any
    }


}