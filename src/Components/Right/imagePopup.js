import React, { useState } from 'react'

let ImagePopup = (props) => {
   let [isOpen, setIsOpen] = useState(false)

   return (
      <div
         className="popup_container"
         onClick={() => { setIsOpen(false) }}
      >
         <img src={props.image} />
      </div>
   )
}

export default ImagePopup