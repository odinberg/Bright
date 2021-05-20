import React from "react";
import {Link} from "react-router-dom";

export function PageHeader() {
    return <header>
        <Link to="/">
        <img className="logo" src="./images/brightlogo.png" alt="logo"/>
        </Link>
        <nav>
            <ul className="nav_links">
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/learn">Learn</Link></li>
                <li><Link to="/scan">Scan</Link></li>
            </ul>
        </nav>
        <Link to="/help">
            <button>Help</button>
        </Link>
    </header>;
}