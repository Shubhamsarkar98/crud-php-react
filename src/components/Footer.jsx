import React from 'react'
import {currentDate} from "../utils/Common"
const Footer = () => {
    
  return (
   <>
   <footer className='bg-dark'>
   <div className="container-fluid">
    <div className='row'>
        <div className='col-md-12'>
         <p style={{color:"white",alignContent:'center'}}>&copy; {currentDate()} Your Company Name. All rights reserved.</p>
        </div>
    </div>
   </div>
   </footer>
   </>
  )
}

export default Footer