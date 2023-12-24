// import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer } from 'react-leaflet';

const Map = () => {
    return (
        <MapContainer
            center={[41.9981, 21.4254]}
            zoom={10}
            style={{ width: '1000px', height: '500px' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};

export default Map;