import React from "react";

import startPlus from "./images/startPlus.png"
import moveSmart from "./images/moveSmart.png"
import sunbellSmart from "./images/sunbellSmart.png"
import sunTurtle from "./images/sunTurtle.png"
import home from "./images/home.png"

export function Service() {
    return (
        <div className="procuctContainer">
            <div className="sunbellSmartDiv">
                <img className="sunbellSmartImg" src={sunbellSmart} alt="startplus" />
                <h2 className="sunbellTxt">Sunbell</h2>
            </div>
            <div className="moveSmartDiv">
                <img className="moveSmartImg" src={moveSmart} alt="startplus" />
                <h2 className="moveSmartTxt">Move smart</h2>
            </div>
            <div className="startPlusDiv">
                <img className="startPlusImg" src={startPlus} alt="startplus" />
                <h2 className="startPlusTxt">Start plus</h2>
            </div>
            <div className="sunTurtleDiv">
                <img className="sunTurtleImg" src={sunTurtle} alt="startplus" />
                <h2 className="sunTurtleTxt">SunTurtle</h2>
            </div>
            <div className="homeDiv">
                <img className="homeImg" src={home} alt="home" />
                <h2 className="homeTxt">Home</h2>
            </div>
        </div>
    );
}