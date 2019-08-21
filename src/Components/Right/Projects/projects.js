import React, {useState} from 'react'
import './projects.css'

import beerBrowser from 'Assets/Images/beer-browser.png'
import beerBrowserSmall from 'Assets/Images/beer-browser-small.jpg'
import chatApp from 'Assets/Images/chat-app.png'
import chatAppSmall from 'Assets/Images/chat-app-small.jpg'
import dataViz from 'Assets/Images/data-visualization.png'
import dataVizSmall from 'Assets/Images/data-visualization-small.jpg'
import snakeGame from 'Assets/Images/snake-game.png'
import snakeGameSmall from 'Assets/Images/snake-game-small.jpg'
import eddyCopy from 'Assets/Images/the-eddy-copy.png'
import eddyCopySmall from 'Assets/Images/the-eddy-copy-small.jpg'
import unityGame from 'Assets/Images/unity-game.png'
import unityGameSmall from 'Assets/Images/unity-game-small.jpg'

import githubMark from 'Assets/Images/github-mark.png'
import newWindowIcon from 'Assets/Images/open-link-white.png'

let IndividualProject = (props) => {
   const [largeLoaded, setLargeLoaded] = useState(false)
   
   return (
      <div className="individual_project_container">
         <div className="links_container">
            {props.githubLink ? 
               <a target="_blank" 
                  href={props.githubLink} 
                  
               > 
                  <img className="github_link" src={githubMark}></img> 
               </a> 
               :
               <div>--</div>
            }
            {props.liveSite ? 
               <a target="_blank" 
                  href={props.liveSite} 
                  
               > 
                  <img className="outside_link" src={newWindowIcon}></img> 
               </a> 
               :
               <div></div>
            }
         </div>
         <div className="project_images">
            <img alt=""
               style={largeLoaded ? {display: 'none'} : {}}
               className="image_small"
               src={props.imageSmall} 
               alt="Temporary tiny placeholder image"
               />
            <a href={props.liveSite} target="_blank">
               <img
                  style={largeLoaded ? {} : { display: 'none' }}
                  className="image_large"
                  src={props.imageLarge}
                  alt="Full resolution project image"
                  onLoad={() => setLargeLoaded(true)}
                  />
            </a>
         </div>
         <div className="bottom_container">
            <h2 className="project_title">{props.title}</h2>
            <p className="project_description">{props.description}</p>
         </div>
      </div>
   )
}


let Projects = (props) => {
   return (
      <div>
         <IndividualProject
            title="Beer Style Guide"
            description="Terse React mapping a single JSON object. 
               Custom configured webpack integrating SASS and Babel."
            imageLarge={beerBrowser}
            imageSmall={beerBrowserSmall}
            githubLink="https://github.com/KrisGoorhuis/beer-browser"
            liveSite="https://beer-style-guide.herokuapp.com/"
         />
         <IndividualProject 
            title="Secret Unity Things"
            description="Why my public github projects are relatively old.
               Original C# scripting and and Unity engine development."
            imageLarge={unityGame}
            imageSmall={unityGameSmall}
            
         />
         <IndividualProject
            title="Temperature Data Visualization"
            description="Another big JSON object pulled apart (a favorite thing 
               of mine). This time mapped and presented with the D3 visualization 
               library."
            imageLarge={dataViz}
            imageSmall={dataVizSmall}
            githubLink="https://github.com/KrisGoorhuis/data-visualization-temperature"
            liveSite="https://krisg-data-visualization-temp.herokuapp.com/"
         />
         <IndividualProject
            title="Chat App"
            description="My first foray into React. It integrates with a 
               MongoDB database of my own make, storing chat history and 
               allowing for private conversations, notifications, and 
               login-free unique IDs."
            imageLarge={chatApp}
            imageSmall={chatAppSmall}
            githubLink="https://github.com/KrisGoorhuis/chat-app"
            liveSite="https://krisg-chat-app.herokuapp.com/"
         />
         <IndividualProject
            title="Copy of The Eddy's old site"
            description="Using someone else's work as more or less a mock, this
               is a recreation using original CSS and assets."
            imageLarge={eddyCopy}
            imageSmall={eddyCopySmall}
            githubLink="https://github.com/KrisGoorhuis/the-eddy-copy"
            liveSite="https://krisg-theeddy-practicecopy.herokuapp.com/"
         />
         <IndividualProject
            title="Snake Game"
            description="An early passion project - a recreation of the 
               classic snake game. Includes selectable stages, score counter, 
               and, my favorite, your character is patterned after a coral 
               snake."
            imageLarge={snakeGame}
            imageSmall={snakeGameSmall}
            githubLink="https://github.com/KrisGoorhuis/snake-game"
            liveSite="https://krisg-snake-game.herokuapp.com/"
         />
      </div>
   )
}

export default Projects