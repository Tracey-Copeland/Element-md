import React from "react";

import "./BrandsOverview.css"

import { Link } from "react-router-dom";



const BrandsOv = () => {


    return(
        <>
            <div className="title-row-part-br">
            <h1>Partnered Brands</h1>

            </div>

            <div className="brands-container">
                <div className="brands-lux brand-row">

                        <img className="brand-logo" src="/images/LUX_logos_darkbrown.png" alt="LUX logo brown"/>


                    <div className="brand-description">
                        <h2 className="br-desc-title">Lux Artision Chocolates</h2>

                        <p className="br-desc-words"> ELEMENT MD brings you LUX Artisian Cannibis Confections. High-Grade Hash Infused Caramel Filled Chocolates
                        sure to suit your every need.</p>
                        
                        <div className="br-desc-btn-row">
                            <Link to="/lux">
                                <button>View Lux</button>
                            </Link>
                            <Link to="/locations">
                                <button>
                                    Locations
                                </button>
                            </Link>
                            
                        </div>
                    </div>
                </div>


                {/* <div className="brands-HASH brand-row">
                    <div className="brand-description">
                        <h2 className="br-desc-title">H.A.S.H. Concentrates</h2>

                        <p className="br-desc-words"> Holistic And Spiritual Health (H.A.S.H) by ELEMENT MD. Discover a premium line of cannabis concentrates 
                        that elevate your wellness experience. </p>

                        <div className="br-desc-btn-row">
                            <Link to="/hash">
                                <button>View HASH</button>
                            </Link>
                            <Link to="/locations">
                                <button>
                                    Locations
                                </button>
                            </Link>
                        </div>

                    </div>
                    <div className="brand-logo">
                        <img src="/images/LUX_logos_darkbrown.png" alt="LUX logo brown"/>

                    </div>
                </div> */}


                {/* <div className="brands-Ryder brand-row">
                    <div className="brand-logo">
                        <img src="/images/LUX_logos_darkbrown.png" alt="LUX logo brown"/>
                        


                    </div>
                    <div className="brand-description">
                        <h2 className="br-desc-title">Ryder, Coming Soon</h2>

                        <p className="br-desc-words"> FILLER Element MD's mission is to produce superior cannabis products that 
                            enrich the lives of our patients and uplift our community. FILLER</p>

                        <div className="br-desc-btn-row">
                            <Link to="/ryder">
                                <button>View Ryder</button>
                            </Link>
                            <Link to="/locations">
                                <button>
                                    Locations
                                </button>
                            </Link>
                        </div>
                    </div>
                </div> */}
            </div>
        
        
        
        </>

    )
}
export default BrandsOv;