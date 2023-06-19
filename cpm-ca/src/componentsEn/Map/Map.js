import React from 'react'

import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const MyMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `200px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 46.9919431, lng: 6.9289134 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 46.9919431, lng: 6.9289134 }} />}
    </GoogleMap>
)




const mapUrl = "https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyD9FmZ3GN480MftgTI8AGfCaLtRLTh9YfI&v=3&callback=initMap"