import React from 'react'
import moment from 'moment'
const Footer = () => {
    const year=moment().format("YYYY");
  return (
   <>
   <footer className='bg-dark'>
   <div className="container-fluid">
    <div className='row'>
        <div className='col-md-12'>
         <p style={{color:"white"}}>&copy; {year} Your Company Name. All rights reserved.</p>
        </div>
    </div>
   </div>
   </footer>
   </>
  )
}

export default Footer