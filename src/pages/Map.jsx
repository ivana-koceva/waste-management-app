// import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'bootstrap/dist/css/bootstrap.css';
import styled from "styled-components";
import PageTitleComponent from '../components/PageTitleComponent';
import MapComponent from '../components/MapComponent';

const PageContainer = styled.div`
  padding: 0 20%;

  @media (max-width: 991px) {
    padding: 0 10%;
  }
`
const Map = () => {
    return (
        <PageContainer className="container my-5">
            <PageTitleComponent title="Map"></PageTitleComponent>
            <div className='my-5'>
                <MapComponent></MapComponent>
            </div>
        </PageContainer>
    );
};

export default Map;