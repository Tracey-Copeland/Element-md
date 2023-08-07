import React, {useState, useRef} from "react";
import {useEffect} from "react";

import "./CarouselHome.css";
import {pics} from '../data/CarouselData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const CarouselHome = () => {
    const [currentPic, setCurrPic] = useState(0);
    const [auto, setAuto] = useState(true);
    const timeOutRef = useRef(null);

    useEffect (() =>{

        let timeOut = timeOutRef.current;
        timeOut = auto && setTimeout(() =>{
            slideRight();
        }, 7500);

        timeOutRef.current = timeOut;
        
    })

    const slideRight = () => {
        setCurrPic(currentPic === pics.length - 1 ? 0 : currentPic + 1);
        // if (currentPic === pics.length -1){
        //     setCurrPic(0);
        // } else {
        //     setCurrPic(currentPic+1);
        // }
        

    }

    const slideLeft = () => {
        setCurrPic(currentPic === 0 ? pics.length : currentPic - 1);

    }




    return(
        <>

        <div className="carousel" 
            onMouseEnter={() => {
                setAuto(false)
                clearTimeout(timeOutRef);
            }}
            onMouseLeave={() => {
                setAuto(true);
            }}
            >


            <div className="carousel_wrapper">
                {pics.map((pic, index) =>{
                    return(
                        <div key={index} className={
                            index === currentPic
                            ? "carousel_card carousel_card-active" 
                            : "carousel_card"}>
                    <img className="card_pic" src={pic.img} alt=""/>
                    <div className="card_overlay">
                        <h2 className="card_title">{pic.title}</h2>
                    </div>
                    </div>
                    )
                })}

                <div className="carousel_arrow_left" onClick={slideLeft}><ArrowBackIosIcon/></div>
                <div className="carousel_arrow_right" onClick={slideRight}><ArrowForwardIosIcon/></div>
                <div className="carousel_pag">
                    {pics.map((_, index) => {
                        return (
                            <div key={index} className={
                                index === currentPic
                                ? "pag_dot pag_dot-active" 
                                : "pag_dot"}
                                onClick={() => setCurrPic(index)}>

                                </div>
                        )
                    })}
                </div>
            </div>
        
            </div>
        
        
        
        
        </>

    )

}

export default CarouselHome;