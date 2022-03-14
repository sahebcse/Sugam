import React, {useState, useEffect} from 'react'
import Map, {Marker, GeolocateControl, NavigationControl, ScaleControl, Layer, Source} from 'react-map-gl';
import { useParams } from 'react-router-dom';
import { getDispatchById } from '../../api';
import pin from './static/pin.png'
import pinblue from './static/pinblue.png'

//This is not an actual fucking hash map ... this is a real fucking map 

export default function DispatchView() {
    const {id}=useParams()
    const [mapState, setMapState]=useState({longitude: 85.29009,
        latitude: 23.29577,
        zoom: 10})
    const [marker1State, setMarker1State]=useState({longitude: 85.2911, latitude: 23.298})
    const [marker2State, setMarker2State]=useState({longitude: 85.2911, latitude: 23.498})
    
    const geojson = {
        type: 'FeatureCollection',
        features: [
          {type: 'Feature', geometry: {type: 'LineString', coordinates:[ [marker1State.longitude, marker1State.latitude], [marker2State.longitude, marker2State.latitude] ]}}
        ]
      };
      
      const layerStyle = {
        id: 'point',
        type: 'line',
        paint: {
          'line-color': '#007cbf',
          'line-width': 3
        }
      };
    
    useEffect(async ()=>
    {   
        const {data}=await getDispatchById(id)
        setMarker1State({longitude: data.startLong, latitude: data.startLat})
        setMarker2State({longitude: data.goalLong, latitude: data.goalLat})
        console.log(data)
        
    }, [mapState])
    
   
    
  return (
    <div className='mt-10 mx-auto grid justify-items-center'>
        <Map 
                
                initialViewState={mapState}
                style={{width: 640, height: 480}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken='pk.eyJ1IjoiYWltYWNoaW5lcGF5IiwiYSI6ImNsMG1icnhkYzBvbWYzanBldXFiOTEwaTQifQ.bOskTywFWy--V4JT147AGA'
        >
           <Marker longitude={marker2State.longitude} latitude={marker2State.latitude} anchor="bottom" >
                <img src={pin} style={{height: 50, width: 50}}/>
            </Marker>
            <Marker longitude={marker1State.longitude} latitude={marker1State.latitude} anchor="bottom">
                <img src={pinblue} style={{height: 50, width: 50}} />
            </Marker>
            <NavigationControl />
            <ScaleControl />
            <Source id="my-data" type="geojson" data={geojson}>
                <Layer {...layerStyle} />
            </Source>
        </Map>
        <p className='text-2xl'>Drone Path between the Drone dispatch point and Drop off point</p>

    </div>
  )
}
