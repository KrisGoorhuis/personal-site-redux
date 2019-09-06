import React, { useState } from 'react';
import './splash.css'

import portrait from 'Assets/Images/portrait.jpg'
import portraitSmall from 'Assets/Images/portrait.jpg'

let Splash = () => {
   const [largeLoaded, setLargeLoaded] = useState(false)

   return (
      <div className="splash_container">
         <div className="top_container">
            <div className="portrait_container">
               <img
                  style={largeLoaded ? { display: 'none' } : {}}
                  src={portrait}
                  alt="portrait"
                  onLoad={() => { setLargeLoaded(true) }}
               />
               <img
                  style={largeLoaded ? {} : { display: 'none' }}
                  src={portraitSmall}
                  alt="portrait"
               />
            </div>
            <div className="intro_container">
               <p>Hello,</p>
               <p>I’m Kris G.</p>
            </div>
         </div>
         <div className="intro_body">
            <p>
               I’m a programmer, snowboarder,
               hobbyist photographer & okay cook
               living out of the pacific northwest.
            </p>
            <p>I’d love to
               <a 
                  className="redtext" 
                  href="mailto:krisgoorhuis@gmail.com">
                  &nbsp; hear from you.
               </a>
            </p>
         </div>
      </div>
   )
}

export default Splash