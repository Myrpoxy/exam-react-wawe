import './Map.css';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { DivIcon } from 'leaflet'; 


function MapInteraction() {
    const map = useMap();
  
    useMapEvents({
      click: () => { map.scrollWheelZoom.enable(); },
      mouseout: () => { map.scrollWheelZoom.disable(); },
    });
  
    return null;
};

function Map() {
    const position = [29.119366, -13.624760];
    const icon = new DivIcon({
        className: 'custom-icon',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="80" viewBox="0 0 25 41"><path d="M12.5 0C8.5 0 5 4 5 9c0 5 7.5 12 7.5 12S20 14 20 9c0-5-3.5-9-7.5-9z" fill="#00B2A0"/></svg>',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [12, -50]
    })


    return(
        <>
            <section className="map" id="map">
                <div className="container">
                    <div className="map__content" id="mapJS" style={{width: "100%", height: "640px"}} title='Щёлкните ЛКМ, чтобы изменять масштаб карты при помощи колесика мыши'>
                        <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                maxZoom={19}
                            />
                            <Marker position={position} icon={icon}>
                                <Popup><b>WAWE!</b><br/>Школа серфинга</Popup>
                            </Marker>
                            <MapInteraction />
                        </MapContainer>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Map;