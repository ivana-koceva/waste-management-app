import { MapContainer, TileLayer, Circle, Popup, Marker} from 'react-leaflet';
import { useState } from 'react';

const Map = () => {

    const [clickedPosition, setClickedPosition] = useState(null);

    const circleData = [
        {center:[41.9981, 21.4254], fillColor: 'red', color: 'red', radius:250},
        {center:[42.0108, 21.4425], fillColor: 'red', color: 'red', radius:250},
        {center:[42.0046, 21.3936], fillColor: 'red', color: 'red', radius:300}
    ];

    const markersData = [
        { position: [41.9981, 21.4254], text: 'Waste' },
        { position: [41.9987, 21.4254], text: 'Waste' },
        { position: [41.9981, 21.4262], text: 'Waste' },
        { position: [42.0115, 21.4425], text: 'Waste' },
        { position: [42.0100, 21.4427], text: 'Waste' },
        { position: [42.0110, 21.4420], text: 'Waste' },
        { position: [42.0055, 21.3930], text: 'Waste' },
        { position: [42.0039, 21.3940], text: 'Waste' },
        { position: [42.0061, 21.3953], text: 'Waste' },
        { position: [42.0041, 21.4134], text: 'Waste' },
        { position: [41.9881, 21.4432], text: 'Waste' },
    ];

    const handleMapClick = (pointerEvent) => {
        console.log('Map clicked:', pointerEvent.latlng);
        console.log('Pressure:', pointerEvent.pressure);
        console.log('Pointer Type:', pointerEvent.pointerType);
        setClickedPosition(pointerEvent.latlng);
    };

    return (
        <MapContainer
            center={[41.9981, 21.4254]}
            zoom={14}
            style={{ width: '1000px', height: '500px'}}
            onClick={handleMapClick}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {circleData.map((circle, index) => (
                <Circle
                    key={index}
                    center={circle.center}
                    pathOptions={{ fillColor: circle.fillColor, color: circle.fillColor }}
                    radius={circle.radius}
                />
            ))}

            {markersData.map((marker, index) => (
                <Marker key={index} position={marker.position}>
                    <Popup>{marker.text}</Popup>
                </Marker>
            ))}

            {clickedPosition && (
                <Popup position={clickedPosition}>
                    Clicked location: {clickedPosition.lat.toFixed(4)}, {clickedPosition.lng.toFixed(4)}
                </Popup>
            )}
        </MapContainer>
    );
};

export default Map;