import React from "react";
import { Routes, Route } from "react-router-dom";
import Projects from "./projects";

function Main() {

    return(
        <React.Fragment>
            <Routes>
                <Route exact path="/" element={<Projects />} />
            </Routes>
        </React.Fragment>
    )
}

export default Main;