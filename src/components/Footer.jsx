import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";



const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="footer-container">
            <div className="footer-left">
                <Link to="/home">
                <img className="footer-pic" src="/images/Element_MD_logo.png" alt="LUX logo light brown"/>
                    </Link>
            </div>
            <div className="footer-center-left">
                <h3>Our Mission</h3>
                <p>Element MD's mission is to produce superior cannabis products that enrich the lives of our patients and uplift our community.</p>
                
            </div>
            <div className="footer-center-right">
                <h3>Our Products</h3>
                <ul>
                    <li>
                        <Link to='/lux/smoked-almond' class="footer-link">
                        Smoked Almond chocolate 
                        </Link>
                        
                    </li>
                    <li>
                        <Link to='/lux/seasalt-caramel' class="footer-link">
                        Sea Salt caramel chocolate 
                        </Link>
                        

                    </li>
                    <li>
                        <Link to='/lux/caramel-macciato' class="footer-link">
                        Caramel Macchiato chocolate 
                        </Link>
                        
                    </li>
                    {/* <li>
                        HASH Product
                    </li> */}
                </ul>
                
            </div>
            <div className="footer-right">
                <strong>
                    <Link to='/contact-us' class="footer-link">
                            <h3>
                                Contact Us
                                </h3>
                    </Link>
                </strong>
                
            </div>
            </div>




        </div>
        
        
        </>

    )
}

export default Footer;