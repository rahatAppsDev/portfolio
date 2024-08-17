'use client'



import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import Link from "next/link"

import { useRouter,usePathname } from 'next/navigation';
import { HiOutlineAcademicCap } from 'react-icons/hi';
const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const menuref = useRef()
    const menubox = useRef()
    const [highlightmenu, setHighlightmenu] = useState("")


    useEffect(() => {
     
        const handleClickOutside = (event) => {
          
          
           if ((menuref.current && !menuref.current.contains(event.target))) {
          
  
            setHighlightmenu("");
          }
          
        };
      
        document.addEventListener('mousedown', handleClickOutside);
        
      
       
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  return (
    <div className='navbar'>
        <p className='mailid'>rahatahmed953@gmail.com</p>
        <div className='navbarmenulist'>
        <button className={`nav_btn ${pathname === '/' ? 'pageactive' : ''}`}>
        <Link className='link' href="/">Home</Link>
        
        </button>
    <button className={`nav_btn ${pathname === '/aboutme' ? 'pageactive' : ''}`}><Link className='link' href="/aboutme">About</Link></button>
    <button ref={menuref} onClick={()=>{
                  if (highlightmenu !== "menu") {
                    setHighlightmenu("menu")
                  } else {
                    setHighlightmenu("")
                  }
                }} className={`nav_btn ${pathname.startsWith('/myprojects') ? 'pageactive' : ''}`}>
    
    <Link className='link' href="/myprojects">Projects</Link>
                
                </button>
                
    
    
      </div>  
        </div>
    
    
  )
}

export default Navbar