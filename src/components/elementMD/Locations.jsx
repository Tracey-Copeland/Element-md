import React from 'react';

import "./Locations.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const Locations = () => {


    return (
        <>
            <div className="title-row">
                <h1>Locations</h1>

            </div>
            <div className="map-row">
                <div className="tet-container">
                    <h2>Element MD is proud to offer our products all accross Maryland</h2>
                    <p>Site directories and locations are found below</p>
                    <ArrowDownwardIcon fontSize='large'/>
                </div>


                
                    <iframe src="https://www.google.com/maps/d/embed?mid=1QiAtRCZxGfzSfFakeRRaeMKeHSIFUrc&ehbc=2E312F" 
                    max-width="800" max-height="480" loading='lazy' className="location-despo-cont" title="Map of dispos"></iframe>
            </div>

            <div className="locations-grid">

                <div className="loc1 location-container">
                    <div className="location-top-row">
                        <img className="top-row-col"src="/images/Green_Point_logo.png" alt="Green Point Desp Logo"/>
                        <div className="loc-top-row-content top-row-col">
                            <h2 className="loc-title">Green Point Wellness - Linthicum</h2>
                            <p>823a Elkridge Landing Rd, Linthicum Heights, MD 21090</p>
                        </div>
                    </div>
                    <div className="location-bot-row">
                        <h3><a href="https://www.gpwellness.com/linthicum-menu?dtche%5Bpath%5D=brands%2Flux">Website</a></h3>
                        <h3>(410) 553-7171</h3>
                        <h3><a href="https://www.google.com/maps/dir//823a+Elkridge+Landing+Rd,+Linthicum+Heights,+MD+21090/@39.6843874,-82.8788108,7z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b7e28aedba2141:0x3104feca0c4f200e!2m2!1d-76.685781!2d39.1959308?entry=ttu">Directions</a></h3>
                    </div>
                </div>

                <div className="loc2 location-container">
                    <div className="location-top-row">
                        <img className="top-row-col"src="/images/Green_Point_logo.png" alt="Green Point Desp Logo"/>
                        <div className="loc-top-row-content top-row-col">
                            <h2 className="loc-title">Green Point Wellness - Laurel</h2>
                            <p>116 Washington Blvd, Laurel, MD 20707</p>
                        </div>
                    </div>
                    <div className="location-bot-row">
                        <h3><a href="https://www.gpwellness.com/linthicum-menu?dtche%5Bpath%5D=brands%2Flux">Website</a></h3>
                        <h3>(240) 524-4010</h3>
                        <h3><a href="https://www.google.com/maps/dir//116+Washington+Blvd,+Laurel,+MD+20707/@39.1035197,-76.9263579,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b7dd73dcb6971d:0x422519cdf99e0d4a!2m2!1d-76.8439565!2d39.1034155?entry=ttu">Directions</a></h3>
                    </div>
                </div>

                <div className="loc3 location-container">
                    <div className="location-top-row">
                        <img className="top-row-col"src="/images/Starbuds_logo.png" alt="Starbuds Logo"/>
                        <div className="loc-top-row-content top-row-col">
                            <h2 className="loc-title">Starbuds Baltimore</h2>
                            <p>5975 Belair Rd, Baltimore, MD 21206</p>
                        </div>
                    </div>
                    <div className="location-bot-row">
                        <h3><a href="https://shop.starbuds.us/brands/lux/">Website</a></h3>
                        <h3>(443) 438-7494</h3>
                        <h3><a href="https://www.google.com/maps/dir//5975+Belair+Rd,+Baltimore,+MD+21206/@39.3472599,-76.6213122,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c8060e46524a3f:0x38fc6c4e975d6d03!2m2!1d-76.5389108!2d39.3471562?entry=ttu">Directions</a></h3>
                    </div>
                </div>

                <div className="loc4 location-container">
                    <div className="location-top-row">
                        <img className="top-row-col"src="/images/Sunburst_Pharm_updated.png" alt="Sunburst Pharm Logo"/>
                        <div className="loc-top-row-content top-row-col">
                            <h2 className="loc-title">Sunburst Pharm</h2>
                            <p>603 Meteor Ave, Cambridge, MD 21613</p>
                        </div>
                    </div>
                    <div className="location-bot-row">
                        <h3><a href="https://rec.sunburstpharm.com/dispensaries/md/cambridge/menu/">Website</a></h3>
                        <h3>(443) 972-5501</h3>
                        <h3><a href="https://www.google.com/maps/dir//603+Meteor+Ave,+Cambridge,+MD+21613/@38.5639464,-76.1465668,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b84a1f0a2eb2c7:0x1e4532bdfafce2e6!2m2!1d-76.0641654!2d38.5638411?entry=ttu">Directions</a></h3>
                    </div>
                </div>

                <div className="loc5 location-container">
                    <div className="location-top-row">
                        <img className="top-row-col"src="/images/PAH_logo.png" alt="Pen Alt Health Logo"/>
                        <div className="loc-top-row-content top-row-col">
                            <h2 className="loc-title">Peninsula Alternative Health</h2>
                            <p>1003 Mt Hermon Rd, Salisbury, MD 21804</p>
                        </div>
                    </div>
                    <div className="location-bot-row">
                        <h3><a href="https://www.iheartjane.com/embed/stores/5475/menu?filters%5Bbrand%5D%5B%5D=Lux">Website</a></h3>
                        <h3>(410) 622-3661</h3>
                        <h3><a href="https://www.google.com/maps/dir//1003+Mt+Hermon+Rd,+Salisbury,+MD+21804/@38.3685485,-75.6594215,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b903a720de3d71:0x19d5f513015e0505!2m2!1d-75.5770201!2d38.3684427?entry=ttu">Directions</a></h3>
                    </div>
                </div>

                <div className="loc6 location-container">
                    <div className="location-top-row">
                        <img className="top-row-col"src="/images/Hi_Tide_logo.png" alt="Hi Tide Logo"/>
                        <div className="loc-top-row-content top-row-col">
                            <h2 className="loc-title">Hi-Tide Dispensary</h2>
                            <p>12600 Marjan Ln, Ocean City, MD 21842</p>
                        </div>
                    </div>
                    <div className="location-bot-row">
                        <h3><a href="https://ochitide.com/adult-use-menu/">Website</a></h3>
                        <h3>(410) 701-2837</h3>
                        <h3><a href="https://www.google.com/maps/dir//12600+Marjan+Ln,+Ocean+City,+MD+21842/@38.3369293,-75.1963017,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b9284e7e48d69b:0xacbc6518485c87e7!2m2!1d-75.1139002!2d38.3368235?entry=ttu">Directions</a></h3>
                    </div>
                </div>

                <div className="loc7 location-container">
                    <div className="location-top-row">
                        <img className="top-row-col"src="/images/Ash_Ember_updated.png" alt="Ash Ember Logo"/>
                        <div className="loc-top-row-content top-row-col">
                            <h2 className="loc-title">Ash + Ember</h2>
                            <p>202 Coursevall Dr #108, Centreville, MD 21617</p>
                        </div>
                    </div>
                    <div className="location-bot-row">
                        <h3><a href="https://ashembercannabis.com/adult-use%2Frec-menu">Website</a></h3>
                        <h3>(443) 262-8045</h3>
                        <h3><a href="https://www.google.com/maps/dir//202+Coursevall+Dr+%23108,+Centreville,+MD+21617/@39.0323564,-76.1562664,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b8733a7fa62135:0x147c52eb2019a838!2m2!1d-76.073865!2d39.032252?entry=ttu">Directions</a></h3>
                    </div>
                </div>

                <div className="loc8 location-container">
                    <div className="location-top-row">
                        <img className="top-row-col"src="/images/Mana_updated.png" alt="Mana Logo"/>
                        <div className="loc-top-row-content top-row-col">
                            <h2 className="loc-title">Mana Supply - Edgewater </h2>
                            <p>3005 Solomons Island Rd, Edgewater, MD</p>
                        </div>
                    </div>
                    <div className="location-bot-row">
                        <h3><a href="https://manasupply.com/shop/edgewater-maryland/">Website</a></h3>
                        <h3>(410) 317-4825</h3>
                        <h3><a href="https://www.google.com/maps/dir//3005+Solomons+Island+Rd,+Edgewater,+MD+21037/@38.9446457,-76.6421228,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89b7f3faaf9a0b8b:0x993e55207bc50a50!2m2!1d-76.5597214!2d38.9445412?entry=ttu">Directions</a></h3>
                    </div>
                </div>

                <div className="loc9 location-container">
                    <div className="location-top-row">
                        <img className="top-row-col"src="/images/Mana_updated.png" alt="Mana Logo"/>
                        <div className="loc-top-row-content top-row-col">
                            <h2 className="loc-title">Mana Supply - Middle River</h2>
                            <p>100 Carroll Island Rd, Middle River, MD 21220</p>
                        </div>
                    </div>
                    <div className="location-bot-row">
                        <h3><a href="https://manasupply.com/shop/middle-river-maryland/">Website</a></h3>
                        <h3>(443) 317-8162</h3>
                        <h3><a href="https://www.google.com/maps/dir//100+Carroll+Island+Rd,+Middle+River,+MD+21220/@39.347539,-76.6084963,11.32z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c7fcd1beb2765f:0x514bea920c8470a4!2m2!1d-76.4002847!2d39.3376059?entry=ttu">Directions</a></h3>
                    </div>
                </div>





            </div>
            
        </>
    );
}

export default Locations;