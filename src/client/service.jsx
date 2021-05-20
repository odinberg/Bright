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
            </div>
            <div className="moveSmartDiv">
                <img className="moveSmartImg" src={moveSmart} alt="startplus" />
            </div>
            <div className="startPlusDiv">
                <img className="startPlusImg" src={startPlus} alt="startplus" />
            </div>
            <div className="sunTurtleDiv">
                <img className="sunTurtleImg" src={sunTurtle} alt="startplus" />
            </div>
            <div className="homeDiv">
                <img className="homeImg" src={home} alt="home" />
            </div>
        </div>
    );
}