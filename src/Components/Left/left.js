import React, { useState } from 'react'
import './left.css'

import Splash from 'Components/Left/Splash/splash.js'
import About from 'Components/Left/More/more.js'
import More from 'Components/Left/About/about.js'

let Left = () => {
   const [page, setPage] = useState(1);

   return (
      <div className="left_container">
         <div className="carousel_controls">
            <div 
               className="carousel_button" 
               onClick={() => setPage(page - 1)}>
               
            </div>
            <div 
               className="carousel_button" 
               onClick={() => setPage(page + 1)}>
               -->
            </div>
         </div>
         {
            page == 1 ? <Splash /> : <React.Fragment></React.Fragment>
         }
         {
            page == 2 ? <About /> : <React.Fragment></React.Fragment>
         }
         {
            page == 3 ? <More /> : <React.Fragment></React.Fragment>
         }

      </div>
   )
}
export default Left