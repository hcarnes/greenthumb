import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class GardenMap extends Component {

  render() {
    return (
      <GoogleMap defaultZoom={11} defaultCenter={{ lat: 40.6981, lng: -73.9571 }}>
        <Marker position={{ lat: 40.6981, lng: -73.9571 }} />
      </GoogleMap>
    )
  }
}

export default compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(GardenMap)