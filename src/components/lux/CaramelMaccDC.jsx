import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./CaramelMaccDC.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CaramelMaccDC = () => {
    const [currentPic, setCurrentPic] = useState(false);

    const carMacPack = "/images/Caramel_Macchiato_w_packaging_lux.png";
    const carMacProduct = "/images/Car_Mac_prod_400.png";

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

    return(
        <>
        <div className="trow-carMac-row">
                <div className="trow-carMac-cont">
                    <Link to="/lux">
                        <button className="lhome-link">
                        <ArrowBackIcon className='arrow-back-btn'/> LUX Home
                        </button>
                    </Link>
                    <div className="trow-carMac-cont-content">
                        <div className="trow-carMac-left">
                            <img className="trow-carMac-product-pic" src={!currentPic ? carMacPack :carMacProduct} alt="Caramel Macciato chocolate" 
                                onClick = {handleCurrentPic}/>
                            <div className="sm-carMac-pic-row">
                                <img src="/images/Caramel_Macchiato_w_packaging_lux.png" alt="Caramel Macciato chocolate"
                                    onClick={handlePackChange}/>
                                <img src="/images/Car_Mac_prod_400.png" alt="Caramel Macciato chocolate"
                                    onClick={handleProdChange}/>
                            </div>
                        </div>

                        <div className="trow-carMac-right">

                            <h1>Caramel Macciato Chocolates</h1>

                            <h2>High-grade hash infused chocolates</h2>

                            <div className="trow-carMac-desc-row">
                                <h4>Product Details</h4>
                                <p>100 mg of thc per chocolate <strong>*</strong></p>
                            </div>

                            <div className="trow-carMac-desc-row">
                                <h4>Description</h4>
                                <p> A rich Belgian chocolate shell, filled with our small-batch, hand-crafted soft coffee caramel and finished with 
                                    a sprinkling of espresso.  Lux delivers 
                                    a strain specific, high-grade live resin or rosin extracted from top-shelf, fresh frozen flower.  The high-grade 
                                    hash infusion is accomplished through proprietary technology to ensure maximum terpene preservation resulting in 
                                    an amplified therapeutic and euphoric experience at lower levels of THC providing the consumer an elevated value 
                                    proposition.  Element MD, as Maryland’s first and only Black woman owned and operated
                                    processing facility, is proud to offer innovative products made for the people, by the people.
                                    </p>
                            </div>

                            <div className="trow-carMac-desc-row">
                                <h4>Options</h4>
                                <p>Available in Dark and Milk Chocolate.</p>
                            </div>

                            <h3 className="disclaimer"> * : This % may represent an aggregate of THC/CBD, THCa/CBDa, THCb/CBDb within the product. 
                                Consumers should review the actual product label for exact % of THC/CBD.</h3>


                        </div>
                    </div>

                    <div className="carMac-extras-row">
                        <div className="carMac-extras-row-left">
                            <h3>Ingredients</h3>
                            <p>Milk chocolate (sugar, coco butter, Belgian unsweetened chocolate, non dat dry milk, soy letcithin, natural vanilla
                                extract), caramel (sugar, corn syrup), corn syrup, salt, vanilla extract (vanilla beans, water, ethol alcohol), 
                                heavy cream (cream, carrageenan) unsalted butter (cream, salt), almond butter (almonds, natural almond extract, salt),
                                smoked almonds (almonds), vegetable oil (canola and/or safflower oil), salt, corn maltodextrin, hickory smoke flavor,
                                yeast, hydrolized corn and soy protein, natural flavors, cannabis extract, processed using ice water, heat, and pressure.
                            </p>

                            <p><strong>Allergens:</strong> dairy, soy, tree nuts(almond). May contain traces of other tree nuts, peanuts.</p>

                        </div>

                        <div className="carMac-extras-row-right">
                            <h3>Related Products</h3>
                            <div className="carMac-extras-row-right-products">
                            <div className="carMac-extras-row-right-prod">
                                    <img src="/images/LUX_SmAl_pack.png" alt="Smoked Almond Pack"/>
                                    <div className="carMac-extras-row-right-prod-cont">
                                        <h4>Smoked Almond Chocolate</h4>
                                        <Link to="/lux/smoked-almond">
                                            <button>View</button>
                                        </Link>
                                    </div>
                                    

                                </div>
                                <div className="carMac-extras-row-right-prod">
                                    <img src="/images/LUX_SSCar_pack.png" alt="Sea Salt Caramel Pack"/>
                                    <div className="carMac-extras-row-right-prod-cont">
                                        <h4>Sea Salt Caramel Chocolate</h4>
                                        <Link to="/lux/seasalt-caramel">
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
                <div className="trow-carmac-page-title">
                    <h1>Caramel Macchiato Artisian Chocolates</h1>
                    <p>High-Grade Hash Infused Caramel Filled Chocolates</p>

                </div>
                <div className="trow-carmac">
                    <div className="trow-carmac-cont">

                    
                <div className="trow-carmac-left">
                    <img className="trow-carmac-product-pic"src="/images/Caramel_Macchiato_w_packaging_lux.png" alt="smoked almond dark chocolate" />
                </div>

                <div className="trow-carmac-right">

                    <div className="trow-carmac-desc-row">
                        <h4>What's Inside?</h4>
                        <p>A rich dark Belgian chocolate shell, filled with our small-batch, hand-crafted almond butter caramel
                            and finished with a sprinkling of crushed smoked almonds.
                        </p>
                    </div>

                    <div className="trow-carmac-desc-row">
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

export default CaramelMaccDC;