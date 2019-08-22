import React, { useState } from 'react'
import './left.css'

import Splash from 'Components/Left/Splash/splash.js'
import About from 'Components/Left/More/more.js'
import More from 'Components/Left/About/about.js'

let Left = () => {
   const [page, setPage] = useState(1);

   let handlePageSet = (change) => {
      let nextPage = page;
      nextPage += change;
      if (nextPage >= 4) {
         nextPage = 1
      }
      if (nextPage <= 0) {
         nextPage = 3
      }
      setPage(nextPage)
   }

   return (
      <div className="left_container">
         <div className="carousel_controls">
            <div 
               className="carousel_button" 
               onClick={() => handlePageSet(-1)}>
               
            </div>
            <div 
               className="carousel_button" 
               onClick={() => handlePageSet(1)}>
               
            </div>
         </div>
         <div className="page_container">
            {
               page === 1 ? <Splash /> : <React.Fragment></React.Fragment>
            }
            {
               page === 2 ? <About /> : <React.Fragment></React.Fragment>
            }
            {
               page === 3 ? <More /> : <React.Fragment></React.Fragment>
            }
         </div>
      </div>
   )
}
export default Left