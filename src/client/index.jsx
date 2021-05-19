import React from "react"
import ReactDOM from "react-dom"
//import logo from './images/brightlogo.png';

function App() {
    return (
    <header>
            {/*<img src={logo} alt="logo"/>*/}
            <nav>
                <ul className="nav_links">
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Learn</a></li>
                    <li><a href="#">Scan</a></li>
                </ul>
            </nav>
            <a className="cta" href="#"><button>Help</button></a>
        </header>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))