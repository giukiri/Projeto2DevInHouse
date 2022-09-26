import React, {useState} from 'react'
// import { Icon } from "leaflet";
import { MapContainer, TileLayer} from 'react-leaflet'
import '../mapa/mapa.css'


const Mapa = () => {

        return(
            <MapContainer center={[-32.0332, -52.0986]} zoom={12}scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>

 )
}


export default Mapa;
