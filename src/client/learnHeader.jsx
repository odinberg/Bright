import React from "react";
import {Link} from "react-router-dom";


export function LearnHeader(){

    return(
    <header className="learn-header">
        <nav>
            <ul className="video_links">
                <li><Link to="/startVideo">How-to Start+</Link></li>
                <li><Link to="/moveVideo">How-to Move</Link></li>
                <li><Link to="/sunbellVideo">How-to Sunbell</Link></li>
            </ul>
        </nav>
    </header>
)}