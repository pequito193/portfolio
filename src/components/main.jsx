import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./aboutMe";
import Projects from "./projects";

function Main(props) {

    const { theme } = props;

    return(
        <React.Fragment>
            <Routes>
                <Route exact path="/portfolio" element={<Projects theme={theme} />} />
                <Route exact path="/portfolio/contact" element={<AboutMe theme={theme} />} />
            </Routes>
        </React.Fragment>
    )
}

export default Main;