import React from "react";
import {Link} from "react-router-dom";
import startPlus from "./images/products/startPlus.png";
import moveSmart from "./images/products/moveSmart.png";
import sunbellSmart from "./images/products/sunbellSmart.png";


export function LearnHeader(){

    return(

    <div className="learnDiv">
        
        <div className="video_links">
            <Link to="/sunbellVideo">
                <div className="learnStyle">
                    <img className="sunbellSmartLearnImg" src={sunbellSmart}/>
                    <p className="learnSunbellTxt">How to Sunbell Smart</p>
                </div>
            </Link>
            <Link to="/moveVideo">
                <div className="learnStyle">
                    <img className="moveSmartLearnImg"src={moveSmart}/>
                    <p className="learnMoveSmartTxt">How to Move Smart</p>
                </div>
            </Link>
            <Link to="/startVideo">
                <div className="learnStyle">
                    <img className="startPlusLearnImg" src={startPlus}/>
                    <p className="learnStartPlusTxt">How to Start+</p>
                </div>
            </Link>
        </div>
    </div>

)}


