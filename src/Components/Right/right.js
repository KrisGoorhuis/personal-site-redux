import React, { useState } from 'react'
import './right.css'
import { connect } from 'react-redux'

import Projects from 'Components/Right/Projects/projects.js'
import Photography from 'Components/Right/Photography/photography.js'

// import arrow from 'Assets/Images/up_arrow.svg'

document.onscroll = () => {
   let scrollButton = document.querySelector(".scroll_top")
   
   if (document.scrollingElement.scrollTop > 100) {
      scrollButton.style.opacity = ".5"
   }
   else {
      scrollButton.style.opacity = "0"
   }
}

let scrollToTop = () => {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // 
}

let Right = (props) => {
   let [page, setPage] = useState(0)

   let flip = (type) => {
      props.dispatch({type: type})
   }

   console.log(props)
   
   return (
      <div className="right_container">
         <button 
            onClick={ () => scrollToTop() } 
            className="scroll_top noselect"
         >  
            ⮝ 
         </button>

         <div className="right_head">
            <div className="right_toggle_scene">
               <div className={ props.right === "projects" ? 
                  "right_toggle_card" : 
                  "right_toggle_card is_flipped"}
               >
                  <div
                     className="toggle_projects_face noselect"
                     onClick={() => flip("FLIP_TO_PHOTOS")}
                  >
                     View Photography
                  </div>
                  <div
                     className="toggle_photography_face noselect"
                     onClick={() => flip("FLIP_TO_PROJECTS")}
                  >
                     View Projects
                  </div>
               </div>
            </div>
            <div className="right_head_text">
               {props.right === "projects" ? 
                  <div> 
                     Projects live on sleepy servers. <br></br>
                     Please give them time to wake up if you want to visit.
                  </div>
                  :
                  <div> 
                     Thing about photographs. <br></br>
                     It's a clever thing.
                  </div>
               }
            </div>
         </div>
         {
            props.right === "projects" ?
               <Projects /> :
               <Photography />
         }
      </div>
   )
}

let mapStateToProps = (state) => {
   return {
      right: state.right
   }
}

export default connect(mapStateToProps)(Right)