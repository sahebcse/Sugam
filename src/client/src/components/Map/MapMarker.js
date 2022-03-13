import React, {useState, useEffect} from 'react'
import Map, {Marker, GeolocateControl, NavigationControl, ScaleControl} from 'react-map-gl';
import pin from './static/pin.png'

//This is not an actual fucking hash map ... this is a real fucking map 

export default function MapMarker() {
    const [mapState, setMapState]=useState({longitude: 85.29009,
        latitude: 23.29577,
        zoom: 14})
    const [markerState, setMarkerState]=useState({longitude: 85.2911, latitude: 23.298})
    useEffect(()=>
    {
        console.log(mapState)
    }, [mapState])
    
    const handleLongitudeChange=(e)=>
    {
        const markerStateCopy=markerState
        setMarkerState({longitude: e.target.value, latitude: markerStateCopy.latitude})
    }

    const handleLatitudeChange=(e)=>
    {
        const markerStateCopy=markerState
        setMarkerState({longitude: markerStateCopy.longitude, latitude: e.target.value})
    }
    
  return (
    <div className='mt-10'>
        <Map 
                
                initialViewState={mapState}
                onMove={(evt)=>setMarkerState(evt.viewState)}
                style={{width: 640, height: 480}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken='pk.eyJ1IjoiYWltYWNoaW5lcGF5IiwiYSI6ImNsMG1icnhkYzBvbWYzanBldXFiOTEwaTQifQ.bOskTywFWy--V4JT147AGA'
        >
           <Marker longitude={markerState.longitude} latitude={markerState.latitude} anchor="bottom" >
                <img src={pin} style={{height: 50, width: 50}}/>
            </Marker>
            <NavigationControl />
            <ScaleControl />
        </Map>

        longitude
        {markerState.longitude}
        latitude
        {markerState.latitude}
    </div>
  )
}
