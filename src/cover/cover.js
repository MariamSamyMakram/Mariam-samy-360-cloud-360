import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMouse } from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.css';

import '././cover.css';
import logo from '././logo.jpg';
import {Route, Switch} from "react-router-dom";
import {Link} from "react-router-dom";


class Cover extends Component{

    scrollDown = () =>{
        window.scrollBy(0, 500);
        window.scrollBy(0, 500);
    }

    render(){
        
        return(
            <div className="cover">
                <div className="container">
                    <Link to={'/'}><img src={logo} className="mb-5"/></Link>
                    <h1 className="pb-5 mb-5" >
                        <Switch>
                            <Route exact path="/">
                                Google Map Javascript API Demo
                            </Route>
                            <Route exact path="/markup">
                                <p className="pb-5">Please enter title and location Lat and Long then the marker will be added to the map.</p>
                            </Route>
                            <Route exact path="/location">
                                <p className="pb-5">You can drag marker on the map to get you location lat and long.</p>
                            </Route>
                        </Switch>
                    </h1>
                    <FontAwesomeIcon icon={faMouse} size="lg" onClick={this.scrollDown} 
                    className="animate__animated animate__bounce animate__infinite animate__slower"/>                  

                </div>
            </div>
        );
    }   
}

export default Cover;