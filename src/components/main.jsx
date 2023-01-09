import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./aboutMe";
import Projects from "./projects";

function Main() {

    return(
        <React.Fragment>
            <Routes>
                <Route exact path="/" element={<Projects />} />
                <Route exact path="/contact" element={<AboutMe />} />
            </Routes>
        </React.Fragment>
    )
}

export default Main;