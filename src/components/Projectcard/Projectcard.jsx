


import React from 'react'
import "./Projectcard.css"
const Projectcard = ({heading,icon,details}) => {
  return (
    <div className='projectcard'>
        <div className='projectcard_head'>
           <div className='icon_head'>
           {icon}
           </div>
            <p>{heading}</p>
        </div>
        <p className='projectcard_details'>{details}</p>
    </div>
  )
}

export default Projectcard