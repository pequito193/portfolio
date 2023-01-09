import React from "react";
import { Link } from "react-router-dom";
import './../styles/header.css'

function Header(props) {

    const { theme, toggleTheme } = props;

    return(
        <React.Fragment>
            <div className="header">
                <img src={require('./../assets/github.png')} alt="github logo" className="github" />
                <div className="slider-div" onClick={toggleTheme}>
                    <button onClick={toggleTheme} id="slider" className={theme}></button>
                </div>
            </div>
            <ul className="links">
                <li><Link to={'/'} className="link">Projects</Link></li>
                <li><Link className="link">About Me</Link></li>
            </ul>
        </React.Fragment>
    )
}

export default Header;