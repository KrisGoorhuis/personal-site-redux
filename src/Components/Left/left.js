import React, { useState } from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import './left.css'
import { connect } from 'react-redux'

import Splash from 'Components/Left/Splash/splash.js'
import Site from 'Components/Left/Site/site.js'
import Me from 'Components/Left/Me/me.js'

import upArrow from 'Assets/Images/up_arrow_purple.svg'





let Left = (props) => {
   const [page, setPage] = useState(1)

   let increment = () => {
      console.log("Incrementing from here")
      props.dispatch({ type: "INCREMENT"})
   }

   let decrement = () => {
      props.dispatch( {type: "DECREMENT"} )
   }


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
               props.page === 1 ? 
               <CSSTransitionGroup
                  className="transition_group"
                  transitionName="leftFade"
                  transitionAppear={true}
                  transitionAppearTimeout={300}
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}
               >
                  <Splash />
               </CSSTransitionGroup> 
               : null
            }
            {
               props.page === 2 ? 
               <CSSTransitionGroup
                  className="transition_group"
                  transitionName="leftFade"
                  transitionAppear={true}
                  transitionAppearTimeout={300}
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}
               >
                  <Me />
               </CSSTransitionGroup> 
               : null
            }
            {
               props.page === 3 ? 
               <CSSTransitionGroup
                  className="transition_group"
                  transitionName="leftFade"
                  transitionAppear={true}
                  transitionAppearTimeout={300}
                  transitionEnterTimeout={300}
                  transitionLeaveTimeout={300}
               >
                  <Site /> 
               </CSSTransitionGroup>
               : null
            }
            {/* <div className="bottom_bar"></div> */}
         </div>
         <div className="carousel_controls">
            <div
               className="carousel_button noselect"
               onClick={() => decrement()}
            >
               <img src={upArrow} style={{transform: "rotate(-90deg)"}} />
               {buttonText[props.page - 1]}
            </div>
            <div
               className="carousel_button noselect"
               onClick={() => increment()}
            >
               {buttonText[props.page + 1]} 
               <img src={upArrow} style={{transform: "rotate(90deg)"}} />
            </div>
         </div>
      </div>
   )
}

let mapStateToProps = (state) => {
   return {
      page: state.page
   }
}

export default connect(mapStateToProps)(Left)