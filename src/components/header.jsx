import React from "react";
import { Link } from "react-router-dom";
import './../styles/header.css'

function Header(props) {

    const { theme, toggleTheme } = props;

    return(
        <React.Fragment>
            <div className={theme} id="header">
                <a target='_blank' rel="noreferrer" href="http://github.com/pequito193"><img src={require('./../assets/github.png')} alt="github logo" className="github"/></a>
                <div className="slider-div" onClick={toggleTheme}>
                    <button onClick={toggleTheme} className={theme} id='slider'></button>
                </div>
            </div>
            <ul className={theme} id="links">
                <li><Link to={'/'} className="link" id={theme}>Projects</Link></li>
                <li><Link to={'/contact'} className="link" id={theme}>About Me</Link></li>
            </ul>
        </React.Fragment>
    )
}

export default Header;