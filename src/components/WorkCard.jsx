import React from 'react'
import './WorkCardStyles.css';
import pro1 from '../assets/project1.png';
import pro2 from '../assets/project2.png';
import pro3 from '../assets/project3.png';

import { NavLink } from 'react-router-dom';
const  WorkCard = () => {
  return (
      <>
         <div className='workContainer'>
             <h1 className='projectHeading'>Projects</h1>
             <div className='projectContainer'>
                 <div className='projectCard'>
                     <img src={pro1}/>
                     <h2 className='projectTitle'>Project Title</h2>
                     <div className='proDetails'>
                         <p>This is Text</p>
                         <div className='proBtn'>
                             <NavLink to='url.com' className='btn'>View</NavLink>
                             <NavLink to='url.com' className='btn'>Source</NavLink>
                         </div>
                     </div>
                 </div>
                 <div className='projectCard'>
                     <img src={pro1}/>
                     <h2 className='projectTitle'>Project Title</h2>
                     <div className='proDetails'>
                         <p>This is Text</p>
                         <div className='proBtn'>
                             <NavLink to='url.com' className='btn'>View</NavLink>
                             <NavLink to='url.com' className='btn'>Source</NavLink>
                         </div>
                     </div>
                 </div>
                 <div className='projectCard'>
                     <img src={pro1}/>
                     <h2 className='projectTitle'>Project Title</h2>
                     <div className='proDetails'>
                         <p>This is Text</p>
                         <div className='proBtn'>
                             <NavLink to='url.com' className='btn'>View</NavLink>
                             <NavLink to='url.com' className='btn'>Source</NavLink>
                         </div>
                     </div>
                 </div>
             </div>
         </div> 
      </>
  )
}
export default WorkCard
