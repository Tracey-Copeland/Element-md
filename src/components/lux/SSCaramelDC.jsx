import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./SSCaramelDC.css"

const SSCaramelDC = () => {
    const [currentPic, setCurrentPic] = useState(false);

    const seaSaltPack = "/images/Sea_Salt_Caramel_w_packaging_lux.png";
    const seaSaltProduct = "/images/Sea_Salt_Prod_400.png";

    const handleCurrentPic = () => {
        if (!currentPic) {
            setCurrentPic(true);
        } else {
            setCurrentPic(false);
        }
    }

    const handlePackChange = () => {
        setCurrentPic(false);
    }

    const handleProdChange = () => {
        setCurrentPic(true);
    }

    return (
        <>
            <div className="trow-SS-row">
                <div className="trow-SS-cont">
                    <Link to="/lux">
                        <button className="lhome-link">
                            <ArrowBackIcon className='arrow-back-btn' /> LUX Home
                        </button>
                    </Link>
                    <div className="trow-SS-cont-content">
                        <div className="trow-SS-left">
                            <img className="trow-SS-product-pic" src={!currentPic ? seaSaltPack : seaSaltProduct} alt="Sea Salt Caramel"
                                onClick={handleCurrentPic} />
                            <div className="sm-SS-pic-row">
                                <img src="/images/Sea_Salt_Caramel_w_packaging_lux.png" alt="Caramel Macciato chocolate"
                                    onClick={handlePackChange} />
                                <img src="/images/Sea_Salt_Prod_400.png" alt="Caramel Macciato chocolate"
                                    onClick={handleProdChange} />
                            </div>
                        </div>

                        <div className="trow-SS-right">

                            <h1>Sea Salt Caramel Chocolates</h1>

                            <h2>High-grade hash infused chocolates</h2>

                            <div className="trow-SS-desc-row">
                                <h4>Product Details</h4>
                                <p>100 mg of thc per chocolate <strong>*</strong></p>
                            </div>

                            <div className="trow-SS-desc-row">
                                <h4>Description</h4>
                                <p>A rich Belgian chocolate shell, filled with our small-batch, hand-crafted soft caramel and finished with a sprinkling 
                                    of Fleur de Sel.  Lux delivers a strain specific, high-grade live resin or rosin extracted from top-shelf, fresh frozen 
                                    flower.  The high-grade hash infusion is accomplished through proprietary technology to ensure maximum terpene preservation
                                    resulting in an amplified therapeutic and euphoric experience at lower levels of THC providing the consumer an elevated 
                                    value proposition. Element MD, as Maryland’s first and only Black woman owned and operated
                                    processing facility, is proud to offer innovative products made for the people, by the people.
                                </p>
                            </div>

                            <div className="trow-SS-desc-row">
                                <h4>Options</h4>
                                <p>Available in Dark and Milk Chocolate.</p>
                            </div>

                            <h3 className="disclaimer"> * : This % may represent an aggregate of THC/CBD, THCa/CBDa, THCb/CBDb within the product.
                                Consumers should review the actual product label for exact % of THC/CBD.</h3>


                        </div>
                    </div>

                    <div className="SS-extras-row">
                        <div className="SS-extras-row-left">
                            <h3>Ingredients</h3>
                            <p>Milk chocolate (sugar, coco butter, Belgian unsweetened chocolate, non dat dry milk, soy letcithin, natural vanilla
                                extract), caramel (sugar, corn syrup), corn syrup, salt, vanilla extract (vanilla beans, water, ethol alcohol),
                                heavy cream (cream, carrageenan) unsalted butter (cream, salt), almond butter (almonds, natural almond extract, salt),
                                smoked almonds (almonds), vegetable oil (canola and/or safflower oil), salt, corn maltodextrin, hickory smoke flavor,
                                yeast, hydrolized corn and soy protein, natural flavors, cannabis extract, processed using ice water, heat, and pressure.
                            </p>

                            <p><strong>Allergens:</strong> dairy, soy, tree nuts(almond). May contain traces of other tree nuts, peanuts.</p>

                        </div>

                        <div className="SS-extras-row-right">
                            <h3>Related Products</h3>
                            <div className="SS-extras-row-right-products">
                            <div className="SS-extras-row-right-prod">
                                    <img src="/images/LUX_CarMac_pack.png" alt="Sea Salt Caramel Pack" />
                                    <div className="SS-extras-row-right-prod-cont">
                                        <h4>Caramel Macchiato Chocolate</h4>
                                        <Link to="/lux/caramel-macciato">
                                            <button>View</button>
                                        </Link>

                                    </div>


                                </div>
                                <div className="SS-extras-row-right-prod">
                                    <img src="/images/LUX_SmAl_pack.png" alt="Smoked Almond Pack" />
                                    <div className="SS-extras-row-right-prod-cont">
                                        <h4>Smoked Almond Chocolate</h4>
                                        <Link to="/lux/smoked-almond">
                                            <button>View</button>
                                        </Link>
                                    </div>


                                </div>
                                

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className="trow-container"> 
                <div className="trow-ss-page-title">
                    <h1>Sea Salt Caramel Artisian Chocolates</h1>
                    <p>High-Grade Hash Infused Caramel Filled Chocolates</p>

                </div>
                <div className="trow-ss-row">
                    <div className="trow-ss-cont">
                <div className="trow-ss-left">
                    <img className="trow-ss-product-pic"src="/images/Sea_Salt_Caramel_w_packaging_lux.png" alt="smoked almond dark chocolate" />
                
                </div>

                <div className="trow-ss-right">

                    <div className="trow-ss-desc-row">
                        <h4>What's Inside?</h4>
                        <p>A rich dark Belgian chocolate shell, filled with our small-batch, hand-crafted almond butter caramel
                            and finished with a sprinkling of crushed smoked almonds.
                        </p>
                    </div>

                    <div className="trow-ss-desc-row">
                        <h4>Quality is key</h4>
                        <p>The high-grade hash is infusion is accomplished through proprietary technology 
                            to ensure mamimum terpene preservation.
                        </p>


                    </div>

                </div>
                </div>

                </div>



            </div> */}

        </>
    )


}

export default SSCaramelDC;