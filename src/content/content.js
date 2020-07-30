import React, { Component } from 'react';

import { Link } from "react-router-dom";

// style
import '././content.css';


class Content extends Component{
 render(){
     
     return(
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-3">
                        <h1>Google Map Options</h1>
                    </div>
                    <div className="col-lg-12">
                        <Link to="/markup">Add Markers </Link>
                    </div>
                    <div className="col-lg-12 mt-3">
                        <Link to="/location">Choose Location </Link>
                    </div>
                </div>

            </div>
        </div>
     );
 }   
}

export default Content;