import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import '././location.css';
import logo from '././logo.jpg';

class Location extends Component{
    constructor(props){
        super(props);
        this.state={
            lat1:30.043381,
            lng1:31.203231,
            lat2:30.043381,
            lng2:31.203231,
        }
    }
    centerMoved(mapProps, map) {
    }
    moveMarker1 = (el, option) =>{
        this.setState({
            lat1: option.position.lat() ,
            lng1: option.position.lng(),
        });
    }
    moveMarker2 = (el, option) =>{
        this.setState({
            lat2: option.position.lat() ,
            lng2: option.position.lng()
        });
    }
    render(){
        const {lat1,lng1,lat2 ,lng2}=this.state;
        return(
            <div className="location pt-5 pb-5">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-6  pb-5">
                            <h1>Location 1</h1>
                            <label>lat: <i>{lat1}</i></label><br/>
                            <label>Long: <i>{lng1}</i></label>
                        </div>
                        <div className="col-lg-6  pb-5">
                            <h1>Location 2</h1>
                            <label>lat: <i>{lat2}</i></label><br/>
                            <label>Long: <i>{lng2}</i></label>
                        </div>
                        <div className="col-lg-12 pt-5 pb-5 map">
                        <Map 
                            google={this.props.google}
                            initialCenter={{
                                lat:lat1,
                                lng:lng1
                            }}
                            zoom={15}
                        >

                            <Marker 
                                onClick={this.onMarkerClick}
                                name={'First Current location'}
                                draggable={true} 
                                onDragend={this.moveMarker1}
                                position={{lat:lat1 ,lng:lng1}}
                            />
                            <Marker 
                                onClick={this.onMarkerClick}
                                name={'Second Current location'}
                                draggable={true} 
                                onDragend={this.moveMarker2}
                                position={{lat:lat2,lng:lng2}}
                            />
                            

                        </Map>
                        </div>
                        <div className="col-lg-2 mb-5">
                            <Link to="/" className="link">Back Home</Link>
                        </div>
                        <div className="col-lg-10"></div>
                    </div>
                </div>
            </div>
        );
    }   
}
   
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCB-uZr4W3Pv59fRyN3nJFawqYrMMQeIkM')
  })(Location)