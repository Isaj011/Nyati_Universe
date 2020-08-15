import React, { useEffect, useState } from 'react';
import './App.css';
import man from './images/man.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import logo from './images/nyatiLogo.svg'
import nyati from './images/nNyati.svg'

import { Button, Modal }
from 'react-bootstrap'

const App = () => {

    const calculateTimeLeft = () => {

        let year = new Date('Jan 1, 2021 00:00:00').getTime();

        var now = new Date().getTime()

        const difference = year - now;

        let timeLeft = {};

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / day),
                hours: Math.floor((difference % (day)) / (hour)),
                minutes: Math.floor((difference % (hour)) / (minute)),
                seconds: Math.floor((difference % (minute)) / (second))
            };
        }
        return timeLeft;
    };



    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }
        timerComponents.push( <div> { timeLeft[interval] } </div>
        );
    });

    return ( <div className = "App">
        <header>
        <a href = "#"
        className = "logo"> < img src = { logo }
        alt = "logo"
        className = "svgLogo"/>
        </a>  </header>

        <Modal show = { show }
        onHide = { handleClose } >
        <Modal.Body > < p > Stay Tuned, Get notified at launch follow on Instagram @ <br/> Nyati_Rogue </p> </Modal.Body> </Modal > 
        <section>
        <img src = { nyati }
        alt = "nyati"
        className = "wave"/>
        < div className = "contentBx" >
        <h2> Coming Soon </h2> <p> Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim and minim veniam. </p>
         <div className = "countdown" >
        <div className = "time" >
        <div id = "day" > {
            timerComponents[0]
        } </div> <span> Days </span> 
        </div>
        <div className = "time" >
        <div id = "hour" > {
             timerComponents[1]
        } </div> <span > Hours </span> </div >
        <div className = "time" >
        <div id = "minute" > {
            timerComponents[2]
        } </div> <span > Minutes </span> </div >
        <div className = "time" >
        <div id = "second" > {
            timerComponents[3]
        } </div> <span > Seconds </span> </div > </div> <a href = "#" onClick = { handleShow } >
        Yooh alert me! </a> </div > <div className = "imgBx" >
        <img src = { man }
        alt = "man"/>
        </div > <ul className = "sci">
        <li >
        <a href = "#" > < img src = { instagram }
        alt = "instagram" />
        </a > < a href = "#" > < img src = { twitter }
        alt = "twitter" />
        </a > </li > </ul> 
        </section> 
        </div>
    );
}

export default App;