import React from "react";
import "./Footer.css"
import { Link } from "react-router-dom";



const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="footer-container">
            <div className="footer-left">
                <Link to="/">
                <img className="footer-pic" src="/images/Element_MD_logo.png" alt="LUX logo light brown"/>
                    </Link>
            </div>
            <div className="footer-center-left">
                <strong>Our Mission</strong>
                <p>Element MD's mission is to produce superior cannabis products that enrich the lives of our patients and uplift our community.</p>
                
            </div>
            <div className="footer-center-right">
                <strong>Our Products</strong>
                <ul>
                    <li>
                        <Link to='/lux/smoked-almond-DC' class="footer-link">
                            Dark/Milk chocolate smoked almond
                        </Link>
                        
                    </li>
                    <li>
                        <Link to='/lux/seasalt-caramel-DC' class="footer-link">
                            Dark/Milk chocolate sea salt caramel
                        </Link>
                        

                    </li>
                    <li>
                        <Link to='/lux/caramel-macciato-DC' class="footer-link">
                            Dark/Milk chocolate caramel macciato
                        </Link>
                        
                    </li>
                    <li>
                        HASH Product
                    </li>
                </ul>
                
            </div>
            <div className="footer-right">
                <strong>
                    <Link to='/contact-us' class="footer-link">
                            Contact Us
                    </Link>
                </strong>
                
            </div>
            </div>




        </div>
        
        
        </>

    )
}

export default Footer;