import React from "react";
import './LHome.css'

import { Link } from 'react-router-dom';





const LHome = () => {


    return (
        <>



            <div className="about-container">

                <div className="ar-title">
                    <h1>The LUX Brand</h1>
                </div>
                <div className="about-row">
                    <div className="arow-col-left">
                        <img src="/images/LUX_logos_darkbrown.png" alt="smoked almond dark chocolate" />
                    </div>
                    <div className="arow-col-right">
                        <p>ELEMENT MD brings you LUX Artisian Cannibis Confections.
                            Our Goal is to deliver a strain specific, high-grade live
                            resin or rosin extracted from top-shelf, fresh frozen flower.
                            The high-grade hash infusion is accomplished through propriety technology
                            to ensure maximum terpene preservation resulting in an amplified therapeutic
                            and euphoric experience at lower levels of THC providing the consumer an
                            elevated value proposition.
                        </p>
                    </div>
                </div>
            </div>

            {/* <div class="top-row">

                <div className="top-row-container">
                    <img src="/images/LUX_logos_darkbrown.png" className="lux-logo" alt="smoked almond dark chocolate" />
                </div>

            </div> */}

            <div className="products-row-container">
                <div className="products-row-title">
                    <h1>Our Products</h1>
                </div>

                <div className="products-row">

                    <div className="product-one">
                        <div className="pic-container">
                            <img src="/images/Smoked_Almond_w_packaging_lux.png" alt="Smoked Almond packaging" />
                        </div>
                        <div className="p1-desc">
                            <h2>Smoked Almond Chocolates</h2>
                            <p>Available in Dark and Milk Chocolate</p>
                        </div>
                        <div className="btn-row">
                            <Link to="/lux/smoked-almond">
                                <button className="p1-btn" type="button">
                                    View Product
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="product-two">
                        <div className="pic-container">
                            <img src="/images/Caramel_Macchiato_w_packaging_lux.png" alt="Caramel Macchiato packaging" />
                        </div>
                        <div className="p2-desc">
                            <h2>Caramel Macchiato Chocolates</h2>
                            <p>Available in Dark and Milk Chocolate</p>
                        </div>
                        <div className="btn-row">
                            <Link to="/lux/caramel-macciato">
                                <button className="p2-btn" type="button">
                                    View Product
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="product-three">
                        <div className="pic-container">
                            <img src="/images/Sea_Salt_Caramel_w_packaging_lux.png" alt="Sea Salt Caramel packaging" />
                        </div>
                        <div className="p3-desc">
                            <h2>Sea Salt Caramel Chocolates</h2>
                            <p>Available in Dark and Milk Chocolate</p>
                        </div>
                        <div className="btn-row">
                            <Link to="/lux/seasalt-caramel">
                                <button className="p3-btn" type="button">
                                    View Product
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default LHome;