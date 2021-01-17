import React, { Component } from "react"
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


const mapStyles = {
  width: '50%',
  height: '50%',
};

const mapApiKey = process.env.REACT_APP_GOOGLE_API_KEY

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 33.59439, lng: -83.85820 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Strickland Law'}

        />
        <Marker />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (mapApiKey)
})(MapContainer);