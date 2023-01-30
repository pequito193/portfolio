import React from "react";
import './../styles/projects.css'

function Projects(props) {

    const { theme } = props;

    return(
        <React.Fragment>
            <div className="project-wrapper">
                <a href="https://github.com/pequito193/weather-app" target='_blank' rel='noreferrer'>
                    <div className="container">
                        <img src={require('./../assets/weather-app.png')} alt="preview of weather app project" className="project-image" />
                        <div className="opaque" id={theme} />
                        <div className="project-name" id={theme}>Weather App</div>
                    </div>
                </a>
                <a href="https://github.com/pequito193/memory-card" target='_blank' rel='noreferrer'>
                    <div className="container">
                        <img src={require('./../assets/memory-card.png')} alt="preview of memory card project" className="project-image" />
                        <div className="opaque" id={theme} />
                        <div className="project-name" id={theme}>Memory Card</div>
                    </div>
                </a>
                <a href="https://github.com/pequito193/shopping-cart" target='_blank' rel='noreferrer'>
                    <div className="container">
                        <img src={require('./../assets/shopping-cart.png')} alt="preview of shopping cart project" className="project-image" />
                        <div className="opaque" id={theme} />
                        <div className="project-name" id={theme}>Shopping Cart</div>
                    </div>
                </a>
                <a href="https://github.com/pequito193/forum-frontend">
                    <div className="container">
                        <img src={require('./../assets/forum-frontend.png')} alt="preview of forum project" className="project-image" />
                        <div className="opaque" id={theme} />
                        <div className="project-name" id={theme}>Forum</div>
                    </div>
                </a>
            </div>
        </React.Fragment>
    )
}

export default Projects;