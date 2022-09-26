
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'

import '../mapa/mapa.css'

const Mapa = () => {
   
    return(
        <div>
            <h1>Consulte o mapa de Farmacias</h1>
            <p>Econtre a farmacia mais próxima a sua</p> 

            <div className='mapa'>
            <MapContainer center={[-32.0332, -52.0986]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
        </div>
    )
}
export default Mapa;