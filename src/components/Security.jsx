import { useEffect } from "react";
import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import "./Security.css"


const Security = () =>{
    const [isNotOfAge, setIsNotOfAge] = useState(true);
    const [redirctTo, setRedirctTo] = useState(false);
    const [clickedNo, setClickedNo] = useState(false);

    useEffect(() => {
        if(sessionStorage.getItem("notage21")){
            setIsNotOfAge(sessionStorage.getItem("notage21"));
            setRedirctTo(true);
        }

        if (!isNotOfAge){
            setRedirctTo(true);
        }
        console.log(redirctTo);

    },[isNotOfAge,redirctTo])

    const handleModalClose = () =>{
        sessionStorage.setItem("notage21", false);

    }
    
    const handleClickedNo = () =>{
        setClickedNo(!clickedNo);

    }


if(redirctTo){
    return <Navigate to="/home" />
} else 
    return(
    <>
        <div className="overlay">
            <div className="modalContainer">
                <div className="modalContent">
                    <img src="/images/Element_MD_logo.png" alt="Element MD logo"/>

                    <h1>You need to be over the age of 21 to view this site</h1>

                    <p>Are you 21 years of age or older?</p>

                    {clickedNo && (
                        <div className="noPopup">You need to be 21 to enter this site</div>
                    )}

                <div className="modalbuttons">
                    <button onClick={handleClickedNo}> 
                        <span className="bold">No</span>, I'm not 21</button>
                        
                    <Link to="/home">
                    <button onClick= {handleModalClose}>
                        <span className="bold">Yes</span>, I'm 21</button>
                    </Link>
                </div>
                
                </div>
            </div>
        </div>
        
    </>
    )

}

export default Security;