import React from "react";
import './../styles/header.css'

function Header() {

    function sliderMovement(e) {

    }

    return(
        <React.Fragment>
            <div className="header">
                <img src={require('./../assets/github.png')} alt="github logo" className="github" />
                <div className="dark-mode">
                    <button className="slider"></button>
                </div>
            </div>
            <ul className="links">
                <li className="link">Projects</li>
                <li className="link">About Me</li>
                <li className="link">Contacts</li>
            </ul>
        </React.Fragment>
    )
}

export default Header;