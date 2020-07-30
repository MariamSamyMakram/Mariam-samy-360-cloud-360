import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import '././footer.css';


class Footer extends Component{
 render(){
     
     return(
        <div className="footer pt-5 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <h3>Mariam Samy | Front End Developer</h3>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <ul>
                            <li><a href="https://www.facebook.com/mrmr.samy.makram/"><FontAwesomeIcon icon={faFacebookF} size="lg" /></a></li>
                            <li><a href="https://www.linkedin.com/in/mariam-samy-7b9b86190/"><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
     );
 }   
}

export default Footer;