import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import React from "react";
import {LatLngExpression} from "leaflet";

export default function Map() {
  const position: LatLngExpression = [51.505, -0.09]

  return (
    <MapContainer
      className="h-screen"
      center={position}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
