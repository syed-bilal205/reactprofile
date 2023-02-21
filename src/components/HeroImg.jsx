import React from 'react';
import './HeroStyle.css';
import IntroImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';

const HeroImg= () =>{
    return(
        <>
            <div className='hero'>
                <div className='mask'>
                   <img className='introImg' src={IntroImg} alt="IntroImg"/> 
                </div>
                <div className='content'>
                    <p>Hi,I'M A FREELANCER.</p>
                    <h1>REACT DEVELOPER</h1>
                    <div>
                        <Link to='/Projects' className='btn'>PROJECTS</Link>
                        <Link to='/Contact' className='btn btn-light'>Contact</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroImg;
