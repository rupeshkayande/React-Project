import React from 'react'
import { Link } from 'react-router-dom'
import './NavComp.css';
const NavComp = () => {
  return (
    
    <div className='navbutton'>
        <Link to="" className='btn btn-primary btn-sm' >Home</Link>{" "}{" "}{" "}{" "}
        <Link to="AboutComp" className='btn btn-primary btn-sm'>About US</Link>{" "}{" "}{" "}{" "}
        <Link to="ContactComp" className='btn btn-primary btn-sm'>Contact</Link>{" "}{" "}{" "}{" "}
        <Link to="ProductComp" className='btn btn-primary btn-sm'>Products</Link>{" "}{" "}{" "}{" "}
        
        
    </div>
  )
}

export default NavComp