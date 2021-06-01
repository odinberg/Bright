import React from "react";
import {Link} from "react-router-dom";
import logo from "./images/brightLogo.png"
import {SearchBar} from "./searchBar1"


export function PageHeader(){

    return(
    <header>
        <Link to="/">
            <img className="logo" src={logo} alt="logo"/>
        </Link>
        <nav>
            <ul className="nav_links">
                <li><Link to="/">Service</Link></li>
                <li><Link to="/learn">Learn</Link></li> 
            </ul>
        </nav>
        <SearchBar></SearchBar>
        <Link to="/help">
            <button className="helpBtn">Help</button>
        </Link>
    </header>
)}