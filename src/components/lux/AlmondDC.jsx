import React from 'react';

import "./AlmondDC.css"


const sAlmondDC = () => {


    return(
        <>
            <div className="trow-container"> 
                <div className="page-title">
                    <h1>Smoked Almond Artisian Chocolates</h1>
                    <p>High-Grade Hash Infused Caramel Filled Chocolates</p>

                </div>
                <div className="trow">
                <div className="trow-left">
                    <img className="product-pic"src="/images/Smoked_Almond_w_packaging_lux.png" alt="smoked almond dark chocolate" />
                
                </div>

                <div className="trow-right">

                    <div className="desc-row">
                        <h4>What's Inside?</h4>
                        <p>A rich dark Belgian chocolate shell, filled with our small-batch, hand-crafted almond butter caramel
                            and finished with a sprinkling of crushed smoked almonds.
                        </p>
                    </div>

                    <div className="desc-row">
                        <h4>Quality is key</h4>
                        <p>The high-grade hash is infusion is accomplished through proprietary technology 
                            to ensure mamimum terpene preservation.
                        </p>


                    </div>

                </div>

                </div>



            </div>

        </>
    )
}


export default sAlmondDC;
