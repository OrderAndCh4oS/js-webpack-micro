import React, {Component} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import marker from '../../images/marker.png';

class Map extends Component {
    componentDidMount() {
        this.map = L.map('map', {
            attributionControl: false
        }).setView([52.05917, 1.15545], 8.8);
        L.tileLayer(
            'https://api.mapbox.com/styles/v1/sean-kl/cjl7y6m3524m32snyjh0ld4d7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2Vhbi1rbCIsImEiOiJjamMyMXZld2swZTRrMzNvZGl5cTVkNDVkIn0.5tL5SmBAcluWAFhqJyjWfw', {
                tileSize: 512,
                zoomOffset: -1
            }).addTo(this.map);
        var markerIcon = L.icon({
            iconUrl: marker,

            iconSize: [62 / 1.5, 112 / 1.5], // size of the icon
            iconAnchor: [31 / 1.5, 125 / 1.5] // point of the icon which will correspond to marker's location
        });
        L.marker([52.05917, 1.15545], {icon: markerIcon}).addTo(this.map);
    }

    render() {
        return <div className="map" id="map"/>;
    }
}

export default Map;