import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComp from './NavComp'
import { images } from '../Shared/Constant/staticData'
import './MainDash.css';


const MainDash = () => {
  return (
    <div className='container'>
        <div className="logo-container">
        {/* Logo image with rounded styling */}
        <img 
          src="./images/logo1.jpeg" 
          alt="R Jewels Logo" 
        />
        {/* Logo name */}
        <h1>RK Jwellers</h1>
      </div>
        <div className='card '>
        <NavComp/>
        <div className='card-header'></div>
        
        <div className='card-body '></div>
        <Outlet/>
        <div className='card-footer '>
            <p className='text-black' style={{float:"right"}}>This is developed by <strong>Rupesh Kayande</strong></p>
        </div>
        </div>
        
        </div>
  )
}

export default MainDash