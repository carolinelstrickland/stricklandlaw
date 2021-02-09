import React, { Component } from "react"
import { Map, GoogleApiWrapper, Marker, InfoWindow, WrappedCard } from 'google-maps-react';
import "./style/mapstyle.css";
import { Container } from "react-bootstrap";


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
      <Container style={{textAlign:"center", alignItems:"center"}}>
        <Map
          google={this.props.google}
          zoom={16}
          initialCenter={
            {
              lat: 33.59439,
              lng: -83.85820
            }
          }
          scrollwheel={false}
          style={{textAlign:"center", width: '50%',
          height: '50%'}}
        >

          <Marker
            onClick={this.onMarkerClick}
            name={'Strickland Law'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
            name={'Strickland Law'}
          >
            <p className={"address"}>
              1138 Conyers St. SE, Covington, Georgia 30014
          </p>


            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>


        </Map>
      </Container>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (mapApiKey)
})(MapContainer);