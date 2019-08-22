import React, { useState } from 'react'
import './right.css'

import Projects from 'Components/Right/Projects/projects.js'
import ImagePopup from 'Components/Right/imagePopup.js'

let Right = () => {
   let [image, setImage] = useState('')

   return (
      <div className="right_container">
         {/* <ImagePopup image={image} /> */}
         <Projects setPopupImage={setImage} />
      </div>
   )
}

export default Right