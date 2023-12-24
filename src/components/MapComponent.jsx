;import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";

export default function MapComponent() {
    return (
    <MapContainer
        center={[41.9981, 21.4254]}
        zoom={10}
        style={{  height: '650px' }}
    >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        </MapContainer>
    )
  };