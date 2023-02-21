import React from 'react'
import { Link } from 'react-router-dom';
import './PricingCardStyle.css';


function PricingCard (prpos){
  return (
      <>
    <div className='.my-pricing-container'>
        <div className='my-pricing'>
            <div className='card'>
            <h3>{prpos.heading}</h3>
            <span className='bar'></span>
            <p className='btc'>{prpos.price}</p>
            <p>{prpos.days}</p>
            <p>{prpos.pages}</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to='/Contact' className='btn'>PURCHASE NOW</Link>
            </div>
        </div>
    </div>
      </>
  )
}

export default PricingCard
