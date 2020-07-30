import React, {Component} from 'react';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import { Link } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';

// css
import '././markup.css';
import logo from '././logo.jpg';

class Markup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            lat: 30.043381,
            lng: 31.203231,
            markers: [],
            activeMarker: {},
            selectedPlace: {},
            showingInfoWindow: false
        }
        this.handleLatChange = this.handleLatChange.bind(this);
        this.handleLngChange = this.handleLngChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    handleLocation = () => {
        const {lat, lng, title, markers} = this.state;
        markers.push({lat: lat, lng: lng, title: title});
        this.setState({
            markers: markers
        })
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleLatChange(event) {
        this.setState({lat: event.target.value});
    }

    handleLngChange(event) {
        this.setState({lng: event.target.value});
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        const {lat, title, lng, markers} = this.state;
        return (
            <div className="markup pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Form className="row">
                                <Form.Group controlId="formBasicTitle" className="col-lg-4">
                                    <Form.Label>Title:</Form.Label>
                                    <Form.Control type="text" value={title} onChange={this.handleTitleChange}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicTitle" className="col-lg-4">
                                    <Form.Label className="pr-2">Lat:</Form.Label>
                                    <Form.Control type="text" value={lat} onChange={this.handleLatChange}/>
                                </Form.Group>
                                <Form.Group controlId="formBasicTitle" className="col-lg-4">
                                    <Form.Label className="pr-2">Lng:</Form.Label>
                                    <Form.Control type="text" value={lng} onChange={this.handleLngChange}/>
                                </Form.Group>
                                <div className="col-lg-12 ">
                                    <Button onClick={this.handleLocation}>Add Location</Button>
                                </div>
                            </Form>
                        </div>
                        <div className="col-lg-12 pt-4 pb-4 map">
                            <Map
                                id={'google-map'}
                                index={'google-map'}
                                google={this.props.google}
                                onClick={this.onMapClicked}
                                initialCenter={{
                                    lat: lat,
                                    lng: lng
                                }}
                                zoom={15}>
                                {markers.map((location, index) => {
                                    return  (<Marker
                                        id={index}
                                        key={index}
                                        onClick={this.onMarkerClick}
                                        name={location.title}
                                        title={location.title}
                                        position={{lat: location.lat, lng: location.lng}}
                                    />);

                                })}

                                <InfoWindow
                                    marker={this.state.activeMarker}
                                    visible={this.state.showingInfoWindow}>
                                    <div>
                                        <h1>{this.state.selectedPlace.name}</h1>
                                    </div>
                                </InfoWindow>
                            </Map>

                        </div>
                        <div className="col-lg-2 mb-5">
                            <Link to="/" className="link">Back Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAlRyHAxluWYzriv1GMil1Jp2cNz0s2_7M')
  })(Markup)