import React from "react";

import { Link } from 'react-router-dom';

import "./Modal.css"


const Modal = ({open}) => {

    return(
        <>

        <div className="overlay">
            <div className="modalContainer">
                <div className="modalContent">
                    <img src="/images/Element_MD_logo.png" alt="Element MD logo"/>

                    <h1>You need to be over the age of 21 to view this site</h1>

                    <p>Are you 21 years of age or older?</p>
                <div className="modalbuttons">
                    <button> 
                        <span className="bold">No</span>, I'm not 21</button>
                        
                    <Link to="/home">
                    <button onClick={() => !open}>
                        <span className="bold">Yes</span>, I'm 21</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal;