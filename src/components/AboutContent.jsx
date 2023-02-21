import React from 'react'
import { Link } from 'react-router-dom';
import './AboutContentStyle.css';
import react1 from '../assets/react1.jpg';
import react2 from '../assets/react2.webp';

const AboutContent = () => {
  return (
  <>
   <div className='about'>
       <div className='left'>
           <h1>Who Am I ?</h1>
           <p>Im a react front-end developer.I create responsive secure websites for my clients.</p>
           <Link to='/contact'>
               <button className='btn'>Contact</button>
           </Link>
       </div>
       <div className='right'>
           <div className='imgContainer'>
               <div className='imgStack top'>
                   <img src={react1} className="img" alt='true'/>
               </div>
               <div className='imgStack bottom'>
                   <img src={react2} className="img" alt='true'/>
               </div>
           </div>
       </div>
    </div> 
  </>
  )
}

export default AboutContent
