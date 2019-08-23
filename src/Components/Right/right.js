import React, { useState } from 'react'
import './right.css'

import Projects from 'Components/Right/Projects/projects.js'
import Photography from 'Components/Right/Photography/photography.js'

let Right = () => {
   let [page, setPage] = useState(0)

   return (
      <div className="right_container">
         <div className="right_controls">
            <div 
               className="right_button"
               onClick={ () => setPage(0) }
            >
               <p>Projects</p>
            </div>
            <div 
               className="right_button"
               onClick={ () => setPage(1) }
            >
               <p>Photography</p>   
            </div>
         </div>
         {
            page === 0 ? 
            <Projects /> :
            <Photography />
         }
      </div>
   )
}

export default Right