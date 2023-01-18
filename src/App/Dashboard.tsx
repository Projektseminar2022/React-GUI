import WeatherHero from "../components/WeatherHero";
import DataBoxHour from "../components/DataBox/DataBoxHour";

export default function Dashboard() {
    return (
        <div className={"w-full h-full"}>
            <WeatherHero/>
            <div className={"divider"}></div>
            <DataBoxHour/>
        </div>

    )
}