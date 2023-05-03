import mapboxgl from 'mapbox-gl';
import { useRef, useEffect, useState } from 'react';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

console.log("mapbox api", process.env.NEXT_PUBLIC_MAPBOX_API_KEY);

export default function ServicesMap(){
    
   
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-90.07153);
    const [lat, setLat] = useState(29.9843);
    const [zoom, setZoom] = useState(11);
    
    useEffect(() => {
        
        const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
        });
        
        map.on('load', () => {
            // Add a data source containing GeoJSON data.
            map.addSource('ServiceArea', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        // These coordinates outline Maine.
                        'coordinates': [
                            [
                                [-90.113, 30.025],
                                [-90.10745, 29.9702],
                                [-90.080, 29.958],
                                [-90.061, 29.964],
                                [-90.0334, 29.959],
                                [-90.050, 30.034], 
                                [-90.113, 30.025]   
                            ]
                        ]
                    }
                }
            });
    
            // Add a new layer to visualize the polygon.
            map.addLayer({
                'id': 'ServiceArea',
                'type': 'fill',
                'source': 'ServiceArea', // reference the data source
                'layout': {},
                'paint': {
                    'fill-color': '#0080ff', // blue color fill
                    'fill-opacity': 0.5
                }
            });
            // Add a black outline around the polygon.
            map.addLayer({
                'id': 'outline',
                'type': 'line',
                'source': 'ServiceArea',
                'layout': {},
                'paint': {
                    'line-color': '#000',
                    'line-width': 3
                }
            });
        });
    
        



        });

    return(
        <>
       <div>
            <div ref={mapContainer} className="map-container" />
        </div>
                    
        </>
    )
}