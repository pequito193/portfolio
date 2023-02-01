import React from "react";
import { Link } from "react-router-dom";
import './../styles/header.css'

function Header(props) {

    const { theme, toggleTheme } = props;

    return(
        <React.Fragment>
            <div className={`${theme} header`}>
                <a target='_blank' rel="noreferrer" href="http://github.com/pequito193"><img src={require('./../assets/github.png')} alt="github logo" className="logo"/></a>
                <div className="slider-div" onClick={toggleTheme}>
                    <button type="button" onClick={toggleTheme} className={`${theme} slider`}></button>
                </div>
            </div>
            <ul className={`${theme} links`}>
                <li><Link to={'/portfolio/'} className={`${theme} link`}>Projects</Link></li>
                <li><Link to={'/portfolio/contact'} className={`${theme} link`}>About Me</Link></li>
            </ul>
        </React.Fragment>
    )
}

export default Header;