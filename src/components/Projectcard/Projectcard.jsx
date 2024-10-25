


import React from 'react'
import "./Projectcard.css"
const Projectcard = ({id,heading,icon,details}) => {
  return (
    <div className='projectcard'>
        <div className='projectcard_head'>
           <div className='icon_head'>
           {icon}
           </div>
            <p>{heading}</p>
        </div>
        <p className='projectcard_details'>{details} {id === 4 && <span style={{color:"rgb(33, 145, 231)", padding:"0px", fontWeight:"bold"}}>earthmovinggroup.com.bd
        {/* <a href="https://assigntrack.com/" target="_blank" style={{color:"rgb(33, 145, 231)", padding:"0 5px", fontWeight:"bold"}} // Opens in a new tab
        rel="noopener noreferrer" >Earthmoving Group</a> */}
        </span>}</p>
        
    </div>
  )
}

export default Projectcard