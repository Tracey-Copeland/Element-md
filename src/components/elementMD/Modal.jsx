import React from "react";

import "./Modal.css"


const Modal = ({open, onClose}) => {
    if(!open) return null;

    return(
        <>
        <div className="overlay">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                <p onClick={onClose} >X </p>
                </div>
                <div className="modalContent">
                    <img src="/images/Element_MD_logo.png" alt="Element MD logo"/>

                    <h1>You need to be over the age of 21 to view this site</h1>

                    <p>Are you 21 years of age or older?</p>
                <div className="modalbuttons">
                    <button> 
                        <span className="bold">No</span>, I'm not 21</button>
                    <button onClick={onClose}>
                        <span className="bold">Yes</span>, I'm 21</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal;