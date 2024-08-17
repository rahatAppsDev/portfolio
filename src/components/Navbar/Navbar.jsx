'use client'



import React, { useRef, useState } from 'react'
import "./Navbar.css"
import Link from "next/link"

import { useRouter,usePathname } from 'next/navigation';
const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const menuref = useRef()
    const menubox = useRef()
    const [highlightmenu, setHighlightmenu] = useState("")


  return (
    <div className='navbar'>
        <p className='mailid'>rahatahmed953@gmail.com</p>
        <div className='navbarmenulist'>
        <Link className={`nav_btn ${pathname === '/' ? 'pageactive' : ''}`} href="/">Home</Link>
        
        <Link className={`nav_btn ${pathname === '/aboutme' ? 'pageactive' : ''}`} href="/aboutme">About</Link>
        <Link className={`nav_btn ${pathname.startsWith('/myprojects') ? 'pageactive' : ''}`} href="/myprojects">Projects</Link>
        
                
    
    
      </div>  
        </div>
    
    
  )
}

export default Navbar