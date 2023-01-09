import React, { useEffect, useState } from "react";
import './../styles/aboutMe.css'

function AboutMe(props) {

    const { theme } = props;
    const [ age, setAge ] = useState('');

    useEffect(() => {
        let birthday = +new Date(2001, 4, 16);
        setAge(~~((Date.now() - birthday) / (31557600000)));
    },[])

    return(
        <React.Fragment>
            <div className="wrapper">
                <h1 className={theme} id="title">Who am I?</h1>
                <p className={theme} id="introduction">Hello!</p>
                <p className={theme} id="introduction">My name is Vitor. I am {age} years old, and I am from Lisbon, Portugal.</p>
                <p className={theme} id="introduction"> I love working with both frontend and backend software, so feel free to contact if you share the same passion!</p>
            </div>
            <div className="wrapper">
                <h1 className={theme} id="title">Contact me here</h1>
                <div className="contacts">
                    <a href="https://github.com/pequito193" target='_blank' rel='noreferrer'><img className={theme} id="github" src={require('./../assets/github2.png')} alt="github logo" /></a>
                    <a href="mailto:vitorspequito@gmail.com" target='_blank' rel='noreferrer'><img className="email" src={require('./../assets/email.png')} alt="gmail logo" /></a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AboutMe;