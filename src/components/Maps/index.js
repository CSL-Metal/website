import React from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps'

const MyMapComponent = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 41.083901, lng: 28.360581 }}
        >
            {props.isMarkerShown && (
                <Marker position={{ lat: 41.083901, lng: 28.360581 }} />
            )}
        </GoogleMap>
    ))
)

export default MyMapComponent
