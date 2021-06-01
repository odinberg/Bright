import React from "react";
import {Link} from "react-router-dom";
import startPlus from "./images/products/startPlus.png";
import moveSmart from "./images/products/moveSmart.png";
import sunbellSmart from "./images/products/sunbellSmart.png";


export function LearnHeader(){

    return(
    <header className="learn-header">
        <nav>
            <div className="video_links">
                <Link to="/sunbellVideo">
                    <div className="sunbellLink">
                        <img className="sunbellSmartImg" src={sunbellSmart}></img>
                        <li>How to Sunbell Smart</li>
                    </div>
                </Link>
                <Link to="/moveVideo">
                    <div className="moveLink">
                        <img className="moveSmartImg"src={moveSmart}></img>
                        <li>How to Move Smart</li>
                    </div>
                </Link>
                <Link to="/startVideo">
                    <div className="startPlusLink">
                        <img className="startPlusImg" src={startPlus}></img>
                        <li>How to Start+</li>
                    </div>
                </Link>
            </div>
        </nav>
    </header>
)}

