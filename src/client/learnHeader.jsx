import React from "react";
import {Link} from "react-router-dom";
import { Products } from "./Products";


export function LearnHeader(){

    return(
    <header className="learn-header">
        <nav>
            <ul className="video_links">
                <li><Link to="/sunbellVideo">How to Sunbell Smart</Link></li>
                <li><Link to="/moveVideo">How to Move Smart</Link></li>
                <li><Link to="/startVideo">How to Start+</Link></li>
            </ul>
        </nav>
    </header>
)}

