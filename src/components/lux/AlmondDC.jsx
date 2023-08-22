import React from 'react';
import { useState } from 'react';
import "./AlmondDC.css";
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';




const SAlmondDC = () => {
    const [currentPic, setCurrentPic] = useState(false);

    const almondPack = "/images/Smoked_Almond_w_packaging_lux.png";
    const almondProduct = "/images/Smoked_almond_closeup_400.png";


    const handleCurrentPic = () =>{
        if (!currentPic){
            setCurrentPic(true);
        } else {
            setCurrentPic(false);
            }
    }

    const handlePackChange = () =>{
        setCurrentPic(false);
    }

    const handleProdChange = () =>{
        setCurrentPic(true);
    }



    return (
        <>
            <div className="trow-almond-row">
                <div className="trow-almond-cont">
                    <Link to="/lux">
                        <button className="lhome-link">
                        <ArrowBackIcon className='arrow-back-btn'/> LUX Home
                        </button>
                    </Link>
                    <div className="trow-almond-cont-content">
                        <div className="trow-almond-left">
                            <img className="trow-almond-product-pic" src={!currentPic ? almondPack :almondProduct} alt="smoked almond dark chocolate" 
                                onClick = {handleCurrentPic}/>
                            <div className="sm-almond-pic-row">
                                <img src="/images/Smoked_Almond_w_packaging_lux.png" alt="smoked almond dark chocolate"
                                    onClick={handlePackChange}/>
                                <img src="/images/Smoked_almond_closeup_400.png" alt="smoked almond dark chocolate"
                                    onClick={handleProdChange}/>
                            </div>
                        </div>

                        <div className="trow-almond-right">

                            <h1>Smoked Almond Chocolates</h1>

                            <h2>High-grade hash infused chocolates</h2>

                            <div className="trow-almond-desc-row">
                                <h4>Product Details</h4>
                                <p>100 mg of thc per chocolate <strong>*</strong></p>
                            </div>

                            <div className="trow-almond-desc-row">
                                <h4>Description</h4>
                                <p>A rich Belgian chocolate shell, filled with our small-batch, hand-crafted almond butter caramel
                                    and finished with a sprinkling of crushed smoked almonds.  Lux delivers a strain specific, high-grade
                                    live resin or rosin extracted from top-shelf, fresh frozen flower.  The high-grade hash infusion is
                                    accomplished through proprietary technology to ensure maximum terpene preservation resulting in an
                                    amplified therapeutic and euphoric experience at lower levels of THC providing the consumer an
                                    elevated value proposition.  Element MD, as Maryland’s first and only Black woman owned and operated
                                    processing facility, is proud to offer innovative products made for the people, by the people.
                                </p>
                            </div>

                            <div className="trow-almond-desc-row">
                                <h4>Options</h4>
                                <p>Available in Dark and Milk Chocolate.</p>
                            </div>

                            <h3 className="disclaimer"> * : This % may represent an aggregate of THC/CBD, THCa/CBDa, THCb/CBDb within the product. 
                                Consumers should review the actual product label for exact % of THC/CBD.</h3>


                        </div>
                    </div>

                    <div className="almond-extras-row">
                        <div className="almond-extras-row-left">
                            <h3>Ingredients</h3>
                            <p>Milk chocolate (sugar, coco butter, Belgian unsweetened chocolate, non dat dry milk, soy letcithin, natural vanilla
                                extract), caramel (sugar, corn syrup), corn syrup, salt, vanilla extract (vanilla beans, water, ethol alcohol), 
                                heavy cream (cream, carrageenan) unsalted butter (cream, salt), almond butter (almonds, natural almond extract, salt),
                                smoked almonds (almonds), vegetable oil (canola and/or safflower oil), salt, corn maltodextrin, hickory smoke flavor,
                                yeast, hydrolized corn and soy protein, natural flavors, cannabis extract, processed using ice water, heat, and pressure.
                            </p>

                            <p><strong>Allergens:</strong> dairy, soy, tree nuts(almond). May contain traces of other tree nuts, peanuts.</p>

                        </div>

                        <div className="almond-extras-row-right">
                            <h3>Related Products</h3>
                            <div className="almond-extras-row-right-products">
                                <div className="almond-extras-row-right-prod">
                                    <img src="/images/LUX_SSCar_pack.png" alt="Sea Salt Caramel Pack"/>
                                    <div className="almond-extras-row-right-prod-cont">
                                        <h4>Sea Salt Caramel Chocolate</h4>
                                        <Link to="/lux/seasalt-caramel">
                                            <button>View</button>
                                        </Link>
                                        
                                    </div>
                                    

                                </div>
                                <div className="almond-extras-row-right-prod">
                                    <img src="/images/LUX_CarMac_pack.png" alt="Caramel Macchiato Pack"/>
                                    <div className="almond-extras-row-right-prod-cont">
                                        <h4>Caramel Macchiato Chocolate</h4>
                                        <Link to="/lux/caramel-macciato">
                                            <button>View</button>
                                        </Link>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}


export default SAlmondDC;
