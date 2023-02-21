import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import PricingCard from '../components/PricingCard';
import WorkCard from '../components/WorkCard';

const Projects = () => {
  return (
    <>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="Some Of My Recent Works"/>
      <WorkCard/>
      <div className='my-pricing-container'>
        <div className='my-pricing'>
        <PricingCard heading='- Basic -' price="$ 100" days="- 3 Days -" pages="- 3 Pages -"/>
        <PricingCard heading='- Premium -' price="$ 200" days="- 2 Days -" pages="- 5 Pages -"/>
        <PricingCard heading='- Bussiness -' price="$ 300" days="- 5 Days -" pages="- 8 Pages -"/>
      
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Projects
