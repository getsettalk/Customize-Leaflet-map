const map = L.map('map').setView([21.85,82.68], 5);

const titleUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const  attribution = '&copy;  OpenStreetMap contributors ♥ coded by sujeet kumar ';
const tiles = L.tileLayer(titleUrl,{attribution});

tiles.addTo(map);

// add cercle layer

const Clayer = L.circle([21.85,82.68],{radius:20000,color:'red'});
Clayer.addTo(map)

// add rect angle
var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
const rectAngle = L.rectangle(bounds)
rectAngle.addTo(map)

// add polygone  on map (trangle square)
const  TrangleCoors = [[37, -109.05],[41, -109.03],[41, -102.05]];
const polygon = L.polygon( TrangleCoors )
polygon.addTo(map)

// add poliline
const  PLine = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
];

const polyline = L.polyline( PLine )
polyline.addTo(map)

// add Circle marker
const CMarker = L.circleMarker([27.85,82.68],{radius:100}) // 100 is in px
CMarker.addTo(map)

// add marker with icon
const icon = L.icon({
    iconUrl :'icon.png',
    iconSize:[30,30]
})
const Marker = L.marker([27.85,82.68],{icon}) // 100 is in px
Marker.bindPopup("<h2> My Apple Store</h2> <input type='text' > ")
Marker.addTo(map)
