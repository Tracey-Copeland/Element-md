import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';

import "./Home.css"

import CarouselHome from './CarouselHome';
import Modal from './Modal';


const Home = () => {
    const[openModal, setOpenModal] = useState(true);
    const[firstVisit, setFirstVisit] = useState(true);

    useEffect(()=> {
        setFirstVisit(sessionStorage.getItem('checkVisit'))
        console.log("first visit: " + firstVisit);
        console.log("open modal: " + openModal);
    },[firstVisit, openModal])



    const handleModal = () => {
        setOpenModal(!openModal);
        sessionStorage.setItem("checkVisit", false);
        console.log("handleModalHappened");

    }


    return (
        <>
                <Modal className="modal" open={openModal}
                onClose={handleModal}/>

                <div className="homepage-container">
                    <div className="welcome-container">
                        <div className="welcome-container-left">
                            <div className="wel-cont-l-top">
                                <img src="/images/Element_MD_logo.png" alt="Element MD logo"/>

                                <h1>Element MD Cannabis Creations</h1>
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
                        <div className="welcome-container-right">
                            <CarouselHome/>
                        </div>
                    </div>

                    <div className="whatdowedo-row">
                        <div className="whatdo-left">
                            <img src='/images/nkechi_talking_in_lab.png' alt="Owner Talking to customer in lab"/>
                        </div>
                        <div className="whatdo-center">
                            <h2>What do we do?</h2>

                            <div className="whatdo-center-desc">
                                <p>Our goal is to promote self-advocacy and enrichment for our community through comprehensive customer guidance, 
                                    developing local talent, and optimizing service delivery. We are dedicated to sustainability and strive to be industry 
                                    leaders in environment consciousness by using recycled ocean plastics for our packaging and minimizing our carbon footprint 
                                    through sustainable business practices. To fulfill this commitment, we deliver the highest caliber cannabis products for 
                                    medical and recreational purposes – these include BHO concentrates, solvent-free concentrates, vape cartridges, and 
                                    artisanal edibles – all of which have been masterfully designed to produce our consumer’s effects. All products we offer 
                                    are crafted with passion and care.</p>
                            </div>
                        </div>
                        <div className="whatdo-right">
                            <img src='/images/eplaning_lab.png' alt="Employee describing Lab"/>
                        </div>
                    </div>

                    <div className="core-values-row">
                        <div className="core-values-title cv-col">
                            <h2>Our Core Values</h2>

                        </div>
                        <div className="core-values-second cv-col">
                            <h2>Strong Deeds</h2>
                            <p> FILLER Element MD's mission is to produce superior cannabis products that enrich the lives of our patients and uplift our community FILLER</p>

                        </div>
                        <div className="core-values-third cv-col">
                            <h2>Gentle Words</h2>
                            <p> FILLER Element MD's mission is to produce superior cannabis products that enrich the lives of our patients and uplift our community FILLER</p>

                        </div>
                        <div className="core-values-fourth cv-col">
                            <h2>Natural Remedies</h2>
                            <p> FILLER Element MD's mission is to produce superior cannabis products that enrich the lives of our patients and uplift our community FILLER</p>

                        </div>



                    </div>
            
                </div>
        </>
    );
}

export default Home;