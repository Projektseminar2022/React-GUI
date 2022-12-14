
import React from "react";

export default function WeatherHero() {
    return (
        <div>
            <div>
                <h1 className={"text-5xl"}>Wetter Köln</h1>
            </div>
            <div className="divider"></div>
            <div className="hero text-white min-h-max bg-gradient-to-r from-sky-500 to-indigo-500 justify-start">
                <div className="hero-content flex-col lg:flex-row justify-start">

                    <div>
                        <h1 className="text-5xl font-bold">wolkig</h1>
                        <h2 className="text-3xl font-bold">12°</h2>
                        <p className="py-6">Blah Blah Blah Wetterinfos, schönes tolles Wetter hier, aber waren Sie schon in Baden-Würtemberg</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
