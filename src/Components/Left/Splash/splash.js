import React from 'react';
import './splash.css'

let Splash = () => {
   return (
      <div className="splash_container">
         <p>Hey there, I’m <span className="colored_text">Kris G.</span></p>
         <p>
            I’m a programmer, snowboarder,
            hobbyist photographer & incognito nerd
            living out of the pacific northwest.
         </p>
         <p>I’d love to <a href="mailto:krisgoorhuis@gmail.com">hear from you.</a></p>
      </div>
   )
}

export default Splash