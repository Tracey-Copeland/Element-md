
import { Link } from 'react-router-dom';

import "./Home.css"

import React, { useState, useRef } from "react";
import { useEffect } from "react";


import { pics } from '../data/CarouselData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const Home = () => {
    const [currentPic, setCurrPic] = useState(0);
    const [auto, setAuto] = useState(true);
    const timeOutRef = useRef(null);

    useEffect(() => {
        let timeOut = timeOutRef.current;
        timeOut = auto && setTimeout(() => {
            slideRight();
        }, 5000);

        timeOutRef.current = timeOut;
    })

    const slideRight = () => {
        setCurrPic(currentPic === pics.length - 1 ? 0 : currentPic + 1);
        clearTimeout(timeOutRef); // added line


    }

    const slideLeft = () => {
        setCurrPic(currentPic === 0 ? pics.length : currentPic - 1);
        clearTimeout(timeOutRef); //added line
    }





    return (
        <>

            <div className="homepage-container">
                <div className="welcome-container">
                    <div className="welcome-container-left">
                        <div className="wel-cont-l-top">
                            <img src="/images/Element_MD_logo.png" alt="Element MD logo" />

                            <h1> Element MD Cannabis Creations</h1>
                        </div>
                        <div className="wel-cont-l-bottom">
                            <h2>Our Mission</h2>
                            <p>Element MD's mission is to produce superior cannabis products that enrich the lives of our patients and uplift our community</p>
                            <div className="buttn-row">
                                <Link to="/brands">
                                    <button>
                                        View Brands
                                    </button>
                                </Link>
                                <Link to="/about-us">
                                    <button>
                                        Learn About us
                                    </button>
                                </Link>
                            </div>

                        </div>

                    </div>
                    <div className="carousel"
                        onMouseEnter={() => {
                            setAuto(false)
                            clearTimeout(timeOutRef);
                        }}
                        onMouseLeave={() => {
                            setAuto(true);
                        }}>


                        <div className="carousel_wrapper">
                            {pics.map((pic, index) => {
                                return (
                                    <div key={index} className={
                                        index === currentPic
                                            ? "carousel_card carousel_card-active"
                                            : "carousel_card"}>
                                        <img className="card_pic" src={pic.img} alt="" />
                                        <div className="card_overlay">
                                            {/* <h2 className="card_title">{pic.title}</h2> */}
                                        </div>
                                    </div>
                                )
                            })}

                            <button className="carousel_arrow_left" onClick={slideLeft}><ArrowBackIosIcon /></button>
                            <button className="carousel_arrow_right" onClick={slideRight}><ArrowForwardIosIcon /></button>
                            <div className="carousel_pag">
                                {pics.map((_, index) => {
                                    return (
                                        <div key={index} className={
                                            index === currentPic
                                                ? "pag_dot pag_dot-active"
                                                : "pag_dot"}
                                            onClick={() => {
                                            setCurrPic(index);
                                            clearTimeout(timeOutRef);
                                            }}>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    </div>

                </div>

                <div className="whatdowedo-row">
                    <div className="whatdo-left">
                        <img src='/images/nkechi_talking_in_lab.png' alt="Owner Talking to customer in lab" />
                    </div>
                    <div className="whatdo-center">
                        <h2>Who are we?</h2>

                        <div className="whatdo-center-desc">
                            <p> Launched in May of 2019, <strong>Element MD</strong> started as a small stand-alone cannabis processor with a clear mission:
                                provide the highest quality cannabis products to both medical and recreational consumers.
                                As an African American, woman owned social equity and family-run business, we have built a close knit
                                working environment dedicated to creating artisan and craft cannabis products such as our <strong>LUX</strong> chocolate and
                                <strong> H.A.S.H. </strong>(Holistic and Spiritual Health) brands with integrity and love. We are proud to go the extra mile to
                                ensure every product is created with exceptional standards and superior quality for the pleasure of our customers.</p>
                        </div>
                    </div>
                    <div className="whatdo-right">
                        <img src='/images/eplaning_lab.png' alt="Employee describing Lab" />
                    </div>
                </div>



                <div className="core-values-row">
                    <div className="core-values-title cv-col">
                        <h2>Our Core Values</h2>

                    </div>
                    <div className="core-values-second cv-col">
                        <h2>Strong Deeds</h2>
                        <p>Through unwavering determination and innovative spirit, Element MD has consistently pioneered new horizons, achieving milestones that set industry standards.
                            Our strong deeds are a reflection of our commitment to excellence, 
                            driving us to continually deliver impactful solutions and leave a lasting positive impact.</p>
                        {/* <p> FILLER Element MD's mission is to produce superior cannabis products that enrich the lives of our patients and uplift our community FILLER</p> */}

                    </div>
                    <div className="core-values-third cv-col">
                        <h2>Gentle Words</h2>
                        <p>Nurturing relationships with a blend of warmth and professionalism, Element MD takes pride in communicating with a gentle touch that resonates with our clients. 
                            Our words are carefully chosen to inspire trust and foster a sense of collaboration, creating an environment where every interaction feels like a meaningful conversation.</p>
                        {/* <p> FILLER Element MD's mission is to produce superior cannabis products that enrich the lives of our patients and uplift our community FILLER</p> */}

                    </div>
                    <div className="core-values-fourth cv-col">
                        <h2>Natural Remedies</h2>
                        <p>At Element MD, we embrace the power of nature by offering a diverse range of carefully curated natural remedies. Our products harness the healing properties of botanical ingredients, providing gentle and effective solutions that promote holistic well-being without compromising on quality.</p>
                        {/* <p> FILLER Element MD's mission is to produce superior cannabis products that enrich the lives of our patients and uplift our community FILLER</p> */}

                    </div>



                </div>

                <div className="location-home-row">
                    <div className="location-home-cont">
                        <iframe className="location-home-cont-left" src="https://www.google.com/maps/d/embed?mid=12VmzX2Dc3ZISCO_DduB3iD6JGsS7uiM&ehbc=2E312F" max-width="500"  max-height="400" loading='lazy' title="Lab location"></iframe>


                        <div className="location-home-cont-right">
                            <h2>Home Base & Reach</h2>
                            <p>We are located in the southern end of the Maryland Peninsula in the town of Princess Anne.
                                We take pride in having a small town feel but still being able to reach all of Maryland through
                                our partnered dispensaries. </p>
                            <div>
                                <Link to="/locations">
                                    <button>
                                        View Dispensaries
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

                {/* <div className="homepage-contact-row">
                        <div className="hpc-title">
                            <h2>Email Us With Inquiries Today</h2>
                        </div>

                        <div>
                            <form className="home-email-form">
                                <div className="home-email-form-item">
                                    <label>First Name: </label>
                                    <input type="text"></input>
                                </div>
                                <div className="home-email-form-item">
                                    <label>Last Name: </label>
                                    <input type="text"></input>
                                </div>
                                <div className="home-email-form-item">
                                    <label>Company: </label>
                                    <input type="text"></input>
                                </div>

                                <div className="home-email-form-item">
                                    <label>Phone Number: </label>
                                    <input type="text"></input>
                                </div>

                                <div className="home-email-form-item">
                                    <label>Email: </label>
                                    <input type="email"></input>
                                </div>

                                <div className="home-email-form-item">
                                    <label>Message: </label>
                                    <textarea rows="7"/>
                                </div>

                                <div className="home-email-form-item">
                                    <input type="submit" value="Send"/>
                                </div>
                            </form>
                        </div>



                    </div> */}
            </div>
        </>
    );
}

export default Home;