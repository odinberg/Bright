import React from "react";

export function PageHeader() {
    return <header>
        <img className="logo" src="./images/brightlogo.png" alt="logo"/>
        <nav>
            <ul className="nav_links">
                <li><a href="#">Service</a></li>
                <li><a href="#">Learn</a></li>
                <li><a href="#">Scan</a></li>
            </ul>
        </nav>
        <a className="cta" href="#">
            <button>Help</button>
        </a>
    </header>;
}