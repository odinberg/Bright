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
                <div className="sunbellLink">
                    <img className="sunbellSmartLearnImg" src={sunbellSmart}></img>
                    <p className="learnSunbellTxt">How to Sunbell Smart</p>
                </div>
            </Link>
            <Link to="/moveVideo">
                <div className="moveLink">
                    <img className="moveSmartImg"src={moveSmart}></img>
                    <p className="learnMoveTxt">How to Move Smart</p>
                </div>
            </Link>
            <Link to="/startVideo">
                <div className="startPlusLink">
                    <img className="startPlusImg" src={startPlus}></img>
                    <p className="learnSmartTxt">How to Start+</p>
                </div>
            </Link>
        </div>
    </div>
)}

