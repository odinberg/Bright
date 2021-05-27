import React from "react";
import {Link} from "react-router-dom";
import logo from "./images/brightLogo.png"


export function PageHeader(){

    return(
    <header>
        <Link to="/">
        <img className="logo" src={logo} alt="logo"/>
            {/*<h1 className="logo">BR!GHT</h1>*/}
        </Link>
        <nav>
            <ul className="nav_links">
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/learn">Learn</Link></li> 
            </ul>
        </nav>
        <Link to="/help">
            <button>Help</button>
        </Link>
    </header>
)}