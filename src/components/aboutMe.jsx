import React, { useEffect, useState } from "react";
import './../styles/aboutMe.css'

function AboutMe(props) {

    const { theme } = props;
    const [ age, setAge ] = useState('');

    useEffect(() => {
        let birthday = +new Date(2001, 5, 16);
        setAge(~~((Date.now() - birthday) / (31557600000)));
    },[])

    return(
        <React.Fragment>
            <div className="wrapper">
                <h1 className={`${theme} title`}>Who am I?</h1>
                <p className={`${theme} introduction`}>Hello!</p>
                <p className={`${theme} introduction`}>My name is Vitor. I am {age} years old, and I am from Lisbon, Portugal.</p>
                <p className={`${theme} introduction`}> I love working with both frontend and backend software, so feel free to contact if you share the same passion!</p>
            </div>
            <div className="wrapper">
                <h1 className={`${theme} title`}>Tools and Skills</h1>
            </div>
            <div className="skills-wrapper">
                <div className={`${theme} card`}>
                    <h2 className={`${theme} sub-title`}>Frontend</h2>
                    <div className="skill-list">
                        <div className="skill-wrapper">
                            <img className="software-logo" src={require('./../assets/html.png')} alt="logo" />
                            <p className={`${theme} skill-name`}>HTML</p>
                        </div>
                        <div className="skill-wrapper">
                            <img className="software-logo" src={require('./../assets/css.png')} alt="logo" />
                            <p className={`${theme} skill-name`}>CSS</p>
                        </div>
                        <div className="skill-wrapper">
                            <img className="software-logo" src={require('./../assets/javascript.png')} alt="logo" />
                            <p className={`${theme} skill-name`}>JavaScript</p>
                        </div>
                        <div className="skill-wrapper">
                            <img className="software-logo" src={require('./../assets/react.png')} alt="logo" />
                            <p className={`${theme} skill-name`}>React</p>
                        </div>
                    </div>
                </div>
                <div className={`${theme} card`}>
                    <h2 className={`${theme} sub-title`}>Backend</h2>
                    <div className="skill-list">
                        <div className="skill-wrapper">
                            <img className="software-logo" src={require('./../assets/nodejs.png')} alt="logo" />
                            <p className={`${theme} skill-name`}>NodeJS</p>
                        </div>
                        <div className="skill-wrapper">
                            <img className="software-logo" src={require('./../assets/expressjs.png')} alt="logo" />
                            <p className={`${theme} skill-name`}>ExpressJS</p>
                        </div>
                        <div className="skill-wrapper">
                            <img className="software-logo" src={require('./../assets/mongodb.png')} alt="logo" />
                            <p className={`${theme} skill-name`}>MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className={`${theme} card`}>
                    <h2 className={`${theme} sub-title`}>Others</h2>
                    <div className="skill-list">
                        <div className="skill-wrapper">
                            <img className="software-logo" src={require('./../assets/npm.png')} alt="logo" />
                            <p className={`${theme} skill-name`}>NPM</p>
                        </div>
                        <div className="skill-wrapper">
                            <img className="software-logo" src={require('./../assets/git.png')} alt="logo" />
                            <p className={`${theme} skill-name`}>Git</p>
                        </div>
                        <div className="skill-wrapper">
                            <img className={`${theme} software-logo`} src={require('./../assets/github.png')} alt="logo" />
                            <p className={`${theme} skill-name`}>Github</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper">
                <h1 className={`${theme} title`}>Contact me here</h1>
                <div className="contacts">
                    <a href="https://github.com/pequito193" target='_blank' rel='noreferrer'><img className={`${theme} github`} src={require('./../assets/github2.png')} alt="github logo" /></a>
                    <a href="mailto:vitorspequito@gmail.com" target='_blank' rel='noreferrer'><img className="email" src={require('./../assets/email.png')} alt="gmail logo" /></a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AboutMe;