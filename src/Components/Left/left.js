import React, { useState } from 'react'
import './left.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Splash from 'Components/Left/Splash/splash.js'
import More from 'Components/Left/More/more.js'
import About from 'Components/Left/About/about.js'

let Left = () => {
   AOS.init()
   const [page, setPage] = useState(1)

   // Lets us scroll in circles instead of a line.
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


   // We'll never reach page 0 or 4 thanks to handlePageSet, 
   // but our return consumes 0 and 4.
   // Could be done more elegantly, I'm sure, but I don't anticipate 
   // this ever being a problem.
   let buttonText = {
      0: "More",
      1: "Home",
      2: "About",
      3: "More",
      4: "Home"
   }

   return (
      <div className="left_container">

         <div className="page_container">
            <div className="splash_container">
               {
                  page === 1 ? <Splash /> : <React.Fragment></React.Fragment>
               }
            </div>
            <div className="about_container">
               {
                  page === 2 ? <About /> : <React.Fragment></React.Fragment>
               }
            </div>
            <div className="more_contaier">
               {
                  page === 3 ? <More /> : <React.Fragment></React.Fragment>
               }
            </div>
         </div>
         <div className="carousel_controls">
            <div
               className="carousel_button"
               onClick={() => handlePageSet(-1)}
            >
               <p>⮜</p> {buttonText[page - 1]}
            </div>
            <div
               className="carousel_button"
               onClick={() => handlePageSet(1)}
            >
               {buttonText[page + 1]} <p>⮞</p>
            </div>
         </div>
      </div>
   )
}
export default Left