import React, { useState } from 'react'
import './left.css'

import Splash from 'Components/Left/Splash/splash.js'

let Left = () => {
   const [page, setPage] = useState('splash');

   return (
      <div className="left_container">
         <div className="carousel_controls">
            <div 
               className="carousel_button" 
               onClick={() => setPage()}>
               left
            </div>
            <div 
               className="carousel_button" 
               onClick={() => setPage()}>
               right
            </div>
         </div>
         <Splash />
      </div>
   )
}
export default Left