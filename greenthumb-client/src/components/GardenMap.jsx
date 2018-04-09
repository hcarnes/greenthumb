import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { connect } from 'react-redux';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";

class GardenMap extends Component {

  render() {
    return (
      <GoogleMap defaultZoom={11} defaultCenter={{ lat: 40.6981, lng: -73.9571 }}>
        <MarkerClusterer
          averageCenter
          enableRetinaIcons
          gridSize={60}
        >
          {this.props.gardens.map(garden => (
            <Marker
              key={`${garden.garden_name}-${garden.jurisdiction}`}
              position={{ lat: parseFloat(garden.latitude), lng: parseFloat(garden.longitude) }}
            />
          ))}
        </MarkerClusterer>
      </GoogleMap>
    )
  }
}

const mapStateToProps = (state) => {
  return { gardens: state.gardens };
};

export default compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
  connect(mapStateToProps)
)(GardenMap)