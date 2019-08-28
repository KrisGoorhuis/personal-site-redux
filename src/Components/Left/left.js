import React, { useState } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import './left.css'

import Splash from 'Components/Left/Splash/splash.js'
import More from 'Components/Left/More/more.js'
import About from 'Components/Left/About/about.js'

let Left = () => {
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
      0: "Site",
      1: "Home",
      2: "Me",
      3: "Site",
      4: "Home"
   }

   return (
      <div className="left_container">

         <div className="page_container">
            {
               page === 1 ? 
               <CSSTransitionGroup
                  transitionName="leftFade"
                  transitionAppear={true}
                  transitionAppearTimeout={300}
               >
                  <Splash />
               </CSSTransitionGroup> 
               : null
            }
            {
               page === 2 ? 
               <CSSTransitionGroup
                  transitionName="leftFade"
                  transitionAppear={true}
                  transitionAppearTimeout={300}
               >
                  <About />
               </CSSTransitionGroup> 
               : null
            }
            {
               page === 3 ? 
               <CSSTransitionGroup
                  transitionName="leftFade"
                  transitionAppear={true}
                  transitionAppearTimeout={300}
               >
                  <More /> 
               </CSSTransitionGroup>
               : null
            }
         </div>
         <div className="carousel_controls">
            <div
               className="carousel_button noselect"
               onClick={() => handlePageSet(-1)}
            >
               <p>⮜</p> {buttonText[page - 1]}
            </div>
            <div
               className="carousel_button noselect"
               onClick={() => handlePageSet(1)}
            >
               {buttonText[page + 1]} <p>⮞</p>
            </div>
         </div>
      </div>
   )
}
export default Left